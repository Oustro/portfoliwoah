import { createTransport } from "nodemailer"

export async function customSendVerificationRequest(params: any) {
  const { identifier, url, provider } = params
  const { host } = new URL(url)
  const transport = createTransport(provider.server)
  const result = await transport.sendMail({
    to: identifier,
    from: provider.from,
    subject: `Sign in to ${host}`,
    text: text({ url }),
    html: html({ url }),
  })
  const failed = result.rejected.concat(result.pending).filter(Boolean)
  if (failed.length) {
    throw new Error(`Email(s) (${failed.join(", ")}) could not be sent`)
  }
}

function html(params: { url: string }) {
  const { url } = params

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="x-apple-disable-message-reformatting">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="format-detection" content="telephone=no, date=no, address=no, email=no">
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            padding: 20px;
          }
          h2, p {
            color: black !important;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            border: 1px solid #dddddd;
            border-radius: 8px;
          }
          .button {
            background-color: #e2e8f0;
            color: black !important;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            margin: 10px 0;
          }
          .footer {
            font-size: 12px;
            text-align: center;
            margin-top: 20px;
          }
          .user-icon {
            display: block;
            margin: 0 auto;
            width: 100px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <img src="https://www.portfoliwoah.io/userIcon.png" alt="User Icon" class="user-icon">
          <h2>Hello again,</h2>
          <p><a href="${url}" class="button">Click here to log in</a></p>
          <p>Or, copy and paste this temporary login code:</p>
          <a href="${url}">${url}</a>
          <p class="footer">If you didn't try to login, you can safely ignore this email.</p>
        </div>
      </body>
    </html>
  `
}

function text({ url }: { url: string }) {
  return `Sign in to Portfoliwoah\n${url}\n\n`
}

