import { Request, Response } from "express";
import Message from "../models/Message.js";

export const handleContactSubmit = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, email, subject, message } = req.body;

    // Simple validation
    if (!name || !email || !subject || !message) {
       res.status(400).json({
        success: false,
        message: "All fields (name, email, subject, message) are required.",
      });
      return;
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
       res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
      return;
    }

    // Save message
    const newMessage = new Message({
      name,
      email,
      subject,
      message,
    });

    await newMessage.save();

    res.status(201).json({
      success: true,
      message: "Message received successfully! We will get in touch soon.",
      data: newMessage,
    });
  } catch (error) {
    console.error("Error in contact submit controller:", error);
    res.status(500).json({
      success: false,
      message: "Server error occurred while sending the message. Please try again later.",
    });
  }
};
