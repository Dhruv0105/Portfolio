/* global process */
import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    console.log("ENV KEY EXISTS:", !!process.env.RESEND_API_KEY);

    const { name, email, message } = req.body;

    const resend = new Resend(process.env.RESEND_API_KEY);

    const response = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: ["hello.dhruv05@gmail.com"],
      replyTo: email,
      subject: "New Portfolio Contact Message",
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    console.log("RESEND RESPONSE:", response);

    return res.status(200).json({
      success: true,
      response,
    });
  } catch (err) {
    console.error("FULL ERROR:", err);

    return res.status(500).json({
      success: false,
      error: err.message,
    });
  }
}