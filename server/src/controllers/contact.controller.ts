// src/controllers/contact.controller.ts
import { Request, Response } from "express";
import { EmailService } from "../services/email.service";
import type { ContactFormData, ContactResponse } from "../types";

const emailService = new EmailService();

export const submitContactForm = async (
  req: Request<{}, {}, ContactFormData>,
  res: Response<ContactResponse>
): Promise<void> => {
  const { name, email, subject, message } = req.body;

  // Validate
  if (!name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    res.status(400).json({
      success: false,
      message: "All fields are required.",
    });
    return;
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    res.status(400).json({
      success: false,
      message: "Please enter a valid email address.",
    });
    return;
  }

  try {
    // Send email to you
    await emailService.sendContactEmail({ name, email, subject, message });

    // Send auto-reply to user
    await emailService.sendAutoReply({ name, email, subject, message });

    res.status(200).json({
      success: true,
      message: "Your message was sent successfully! I'll get back to you soon.",
    });
  } catch (error: any) {
  console.error("🔥 CONTACT EMAIL ERROR 🔥");
  console.error(error);
  console.error("Message:", error?.message);
  console.error("Code:", error?.code);
  console.error("Response:", error?.response);

  res.status(500).json({
    success: false,
    message: error?.message || "Failed to send email",
  });
}

export const healthCheck = (req: Request, res: Response): void => {
  res.json({
    success: true,
    message: "Server is running",
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
    },
  });
};