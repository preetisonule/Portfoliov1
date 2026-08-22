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

  // Validate required fields
  if (
    !name?.trim() ||
    !email?.trim() ||
    !subject?.trim() ||
    !message?.trim()
  ) {
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
    // Send contact message to Preeti's email
    await emailService.sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });

    res.status(200).json({
      success: true,
      message:
        "Your message was sent successfully! I'll get back to you soon.",
    });
  } catch (error: any) {
    console.error("❌ Contact form email error:", error);
    console.error("Error message:", error?.message);
    console.error("Error code:", error?.code);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
};

// Health check
export const healthCheck = (
  req: Request,
  res: Response
): void => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    data: {
      status: "ok",
      timestamp: new Date().toISOString(),
    },
  });
};