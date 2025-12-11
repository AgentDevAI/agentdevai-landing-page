import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

export const runtime = "nodejs"

const contactSchema = z.object({
  firstName: z.string().min(1, "First name is required").max(100),
  lastName: z.string().min(1, "Last name is required").max(100),
  email: z.string().email("Invalid email").max(200),
  company: z.string().max(200).optional().or(z.literal("")),
  phone: z.string().max(50).optional().or(z.literal("")),
  service: z.string().min(1).max(100),
  message: z.string().min(1, "Message is required").max(5000),
  interests: z.array(z.string()).max(20).optional().default([]),
})

export async function POST(req: Request) {
  let parsedBody

  try {
    const body = await req.json()
    const result = contactSchema.safeParse(body)

    if (!result.success) {
      return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
    }

    parsedBody = result.data
  } catch (error) {
    console.error("[contact] Failed to parse request body", error)
    return NextResponse.json({ error: "Malformed request" }, { status: 400 })
  }

  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO, CONTACT_FROM, SMTP_SECURE } = process.env

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !CONTACT_TO) {
    console.error("[contact] Missing SMTP configuration")
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 })
  }

  const port = Number(SMTP_PORT) || 587
  const secure = SMTP_SECURE === "true" || port === 465

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  })

  const { firstName, lastName, email, company, phone, service, message, interests } = parsedBody

  const subject = `New contact form submission from ${firstName} ${lastName}`
  const interestList = Array.isArray(interests) && interests.length > 0 ? interests.join(", ") : "None provided"

  const textBody = [
    `Name: ${firstName} ${lastName}`,
    `Email: ${email}`,
    `Company: ${company || "Not provided"}`,
    `Phone: ${phone || "Not provided"}`,
    `Service: ${service}`,
    `Interests: ${interestList}`,
    "",
    "Message:",
    message,
  ].join("\n")

  const htmlBody = `
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Company:</strong> ${company || "Not provided"}</p>
    <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
    <p><strong>Service:</strong> ${service}</p>
    <p><strong>Interests:</strong> ${interestList}</p>
    <p><strong>Message:</strong></p>
    <p>${message.replace(/\n/g, "<br>")}</p>
  `

  try {
    const info = await transporter.sendMail({
      from: CONTACT_FROM || SMTP_USER,
      to: CONTACT_TO,
      replyTo: email,
      subject,
      text: textBody,
      html: htmlBody,
    })

    console.info("[contact] Message sent", {
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
      response: info.response,
    })

    return NextResponse.json({
      ok: true,
      messageId: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    })
  } catch (error) {
    console.error("[contact] Failed to send email", error)
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
  }
}
