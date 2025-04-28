import { ErrorResponse, SuccessResponse } from "@/app/api/helpers";
import { NextResponse } from "next/server";
import { sendEmailHandler } from "./service";

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
export async function POST(request: Request): Promise<NextResponse> {
  try {
    const emailData = await request.json();

    await sendEmailHandler(emailData);

    return SuccessResponse({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    
    return ErrorResponse("Failed to send email");
  }
}
