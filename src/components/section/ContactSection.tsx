"use client";

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Input,
  Textarea,
} from "@/components/ui";
import DOMPurify from "dompurify";

import { API_ENDPOINTS, ApiResponse } from "@/config";
import { track } from "@vercel/analytics";
import { useState } from "react";
import { toast } from "sonner";
import { z } from "zod";
import { ScrollAnimationWrapper } from "../theme";

const formDataInitial = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name must be at most 50 characters"),
  email: z
    .string()
    .email("Please enter a valid email")
    .max(100, "Email must be at most 100 characters"),
  subject: z
    .string()
    .min(1, "Subject is required")
    .max(100, "Subject must be at most 100 characters"),
  message: z.string().min(1, "Message is required"),
});

type FormSchema = z.infer<typeof formSchema>;

const ContactSection = () => {
  const [formData, setFormData] = useState<FormSchema>(formDataInitial);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validateErrors, setValidateErrors] = useState<Record<string, string>>(
    {},
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      formSchema.parse(formData);

      const sanitizedData: FormSchema = {
        name: DOMPurify.sanitize(formData.name),
        email: DOMPurify.sanitize(formData.email),
        subject: DOMPurify.sanitize(formData.subject),
        message: DOMPurify.sanitize(formData.message),
      };

      // Vercel analytic
      track("contact-form-submit", {
        email: sanitizedData.email,
      });

      const res = await fetch(API_ENDPOINTS.contact, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sanitizedData),
      });

      const payload = (await res.json()) as ApiResponse<{
        message: string;
      }>;

      if (!payload.success) {
        if (payload.details) setValidateErrors(payload.details);
        throw new Error(payload.error);
      }

      toast.success(payload.data.message);
      // setFormData(formDataInitial);
      setValidateErrors({});
    } catch (err: unknown) {
      if (err instanceof z.ZodError) {
        const errors = err.errors.reduce(
          (acc, error) => {
            acc[error.path[0]] = error.message;
            return acc;
          },
          {} as Record<string, string>,
        );
        setValidateErrors(errors);
        return;
      }

      toast.error(
        "Fail to send message.\nPlease contact me at longkr.work@gmail.com",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));

    if (validateErrors[name]) {
      setValidateErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <ScrollAnimationWrapper className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Contact Me</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              id="name"
              name="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              error={validateErrors?.name}
            />
            <Input
              id="email"
              name="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              error={validateErrors?.email}
            />
            <Input
              id="subject"
              name="subject"
              label="Subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Message subject"
              error={validateErrors?.subject}
            />
            <Textarea
              id="message"
              name="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              className="min-h-[150px]"
              error={validateErrors?.message}
            />
            <Button
              type="submit"
              className="w-full"
              disabled={isSubmitting}
              variant="primary"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </ScrollAnimationWrapper>
  );
};

export default ContactSection;
