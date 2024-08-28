'use server'
import nodemailer from 'nodemailer'
export async function sendMail({
  from,
  name,
  subject,
  body
}: {
  from: string
  name: string
  subject: string
  body: string
}) {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env
  const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD
    }
  })
  try {
    const testResult = await transport.verify()
    console.log(testResult)
  } catch (e) {
    return 'failure'
  }

  try {
    const sendResult = await transport.sendMail({
      to: SMTP_EMAIL,
      subject: from + ' - ' + name + ' - ' + subject,
      html: body
    })
    console.log(sendResult)
    return 'success'
  } catch (e) {
    return 'failure'
  }
}
