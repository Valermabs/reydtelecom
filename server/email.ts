
import nodemailer from "nodemailer";
import type { InsertContact } from "@shared/schema";

export async function sendContactEmail(contact: InsertContact) {
  console.log('sendContactEmail called with:', contact);

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: 'REYD Telecom Webpage <bgmabs@gmail.com>',
      to: 'valmabs4@gmail.com',
      subject: `New Contact Form Submission from ${contact.name}`,
      text: `Name: ${contact.name}\nEmail: ${contact.email}\nPhone: ${contact.phone}\nMessage: ${contact.message}`,
      replyTo: contact.email,
    };

    console.log('Sending email with options:', mailOptions);
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.error('Error sending contact email:', err);
    throw err;
  }
}
