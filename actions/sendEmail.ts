"use server";

import ContactFormEmail from "@/email/ContactFormEmail";
import { getErrorMessage, validateString } from "@/lib/utils";
import React from "react";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_EMAIL_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const message = formData.get("message");
  const email = formData.get("email");

  if (!validateString(message, 500)) {
    return {
      error: "Invalid message format",
    };
  }
  if (!validateString(message, 500)) {
    return {
      error: "Invalid message format",
    };
  }
  if (!message || typeof message !== "string") {
    return {
      error: "Invalid message format",
    };
  }
  if (!email || typeof email !== "string") {
    return {
      error: "Invalid message format",
    };
  }
  let data;
  try {
    await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: "bminer85@gmail.com",
      subject: "Hi Brian!",
      reply_to: email,
      react: React.createElement(ContactFormEmail, { message: message, email: email }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return { data };
};
