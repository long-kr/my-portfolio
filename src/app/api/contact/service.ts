import nodemailer from "nodemailer";

/**
 * Sends an email using the provided email data.
 *
 * @param emailData - The email data containing name, email, subject, and message.
 * @returns A Promise that resolves when the email is sent successfully.
 */
export const sendEmailHandler = async (emailData: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const { name, email, subject, message } = emailData;
    
  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === "true",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Email content
  const mailOptions = {
    from: "longkr.work@demomailtrap.co",
    to: "longkr.work@gmail.com",
    subject: `Portfolio Contact: ${subject}`,
    text: `
          Name: ${name}
          Email: ${email}
          Subject: ${subject}
          Message: ${message}
        `,
    html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
        `,
  };

  // Send email
  await transporter.sendMail(mailOptions);
};
