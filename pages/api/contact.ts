import type { NextApiRequest, NextApiResponse } from 'next'
import nodemailer from 'nodemailer'

const fallbackRecipient = 'info@curamus-facility.de'
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type ContactPayload = {
  name: string
  email: string
  message: string
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case '&':
        return '&amp;'
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '"':
        return '&quot;'
      case "'":
        return '&#39;'
      default:
        return char
    }
  })

async function sendEmail({ name, email, message }: ContactPayload) {
  if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
    console.warn('SMTP is not configured. Skipping email delivery.', {
      name,
      email,
    })
    return
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  })

  const recipient = process.env.CONTACT_RECIPIENT ?? fallbackRecipient
  const escapedName = escapeHtml(name)
  const escapedEmail = escapeHtml(email)
  const emailHref = `mailto:${encodeURIComponent(email)}`
  const formattedMessage = escapeHtml(message).replace(/\n/g, '<br />')

  await transporter.sendMail({
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
    to: recipient,
    replyTo: email,
    subject: `Neue Kontaktanfrage von ${name}`,
    text: [`Name: ${name}`, `E-Mail: ${email}`, '', 'Nachricht:', message].join('\n'),
    html: `
      <p><strong>Name:</strong> ${escapedName}</p>
      <p><strong>E-Mail:</strong> <a href="${emailHref}">${escapedEmail}</a></p>
      <p><strong>Nachricht:</strong></p>
      <p>${formattedMessage}</p>
    `,
  })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : ''
  const email = typeof req.body?.email === 'string' ? req.body.email.trim() : ''
  const message = typeof req.body?.message === 'string' ? req.body.message.trim() : ''

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Bitte füllen Sie alle Pflichtfelder aus.' })
  }

  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Bitte geben Sie eine gültige E-Mail-Adresse an.' })
  }

  try {
    await sendEmail({ name, email, message })
    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Fehler beim Versenden der Kontaktanfrage', error)
    return res.status(500).json({ error: 'Kontaktanfrage konnte nicht gesendet werden.' })
  }
}
