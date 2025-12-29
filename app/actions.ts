"use server";

import { Resend } from "resend";

// Initialize inside function to avoid startup crash if env is missing

export async function sendEmail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    if (!process.env.RESEND_API_KEY) {
        return {
            error: "Resend API Key is missing. Please add RESEND_API_KEY to your .env file."
        };
    }

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const data = await resend.emails.send({
            from: "Portfolio Contact <onboarding@resend.dev>", // Default Resend test email
            to: ["fasilzaman987@gmail.com"],
            subject: `New Message from ${name}: ${subject}`,
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        });

        return { success: true, data };
    } catch (error) {
        return { error: (error as Error).message };
    }
}
