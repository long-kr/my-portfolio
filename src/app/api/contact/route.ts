import { ErrorResponse, SuccessResponse } from "@/lib";
import rateLimitWrapper from "@/lib/rateLimitWrapper";
import { NextResponse } from "next/server";

/**
 * Contact API route
 *
 * Handles POST requests to send emails
 *
 * Expects the following JSON payload:
 * {
 *   "name": "John Doe",
 *   "email": "john.doe@example.com",
 *   "subject": "Message subject",
 *   "message": "Your message"
 * }
 *
 * @param request - The incoming HTTP request containing the email data
 * @returns HTTP Response containing the result of the email sending process
 */
export const POST = rateLimitWrapper(
  async (request: Request): Promise<NextResponse> => {
    try {
      console.log("Received email data:", request.body);
      const emailData = await request.json();
      console.log("Received email data:", emailData);
      // await sendEmailHandler(emailData);

      return SuccessResponse({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);

      return ErrorResponse("Failed to send email");
    }
  },
);
