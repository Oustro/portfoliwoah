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
      <link href="https://fonts.googleapis.com/css2?family=Sora:wght@400&family=IBM+Plex+Serif:ital,wght@0,300;1,300&display=swap" rel="stylesheet">
      <style>
        .sora {
          font-family: 'Sora', sans-serif;
          font-weight: 400;
        }
        .ibm-plex-serif {
          font-family: 'IBM Plex Serif', serif;
          font-weight: 300;
          font-style: italic;
        }
        .mainClass {
          overflow: hidden; 
          position: relative; 
          padding-left: 1rem;
          padding-right: 1rem; 
          justify-content: center; 
          min-height: 100vh; 
        }
        .buttonClass {
          display: inline-block; 
          padding: 0.75rem; 
          border-radius: 0.5rem; 
          font-size: 0.875rem;
          line-height: 1.25rem; 
          transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 300ms; 
          cursor: pointer; 
          background-color: rgb(226 232 240);
        }
        .buttonClass:hover {
          background-color: rgb(203 213 225);
        }
        a {
          color: black;
          text-decoration: none;
        }
      </style>
    </head>
    <body class="sora">
      <main class="mainClass">
        <div>
          <h1>We know, this email is ugly.</h1>
          <p>Maybe you should do something about it. https://github.com/Oustro/portfoliwoah</p>
          <div class="buttonClass">
            <span><a href="${url}">Use Magic Link</a></span>
          </div>
          <p class="text-center mt-12 text-sm">Button not working? Use this link.</p>
          <p class="text-center mt-4 text-sm">${url}</p>
        </div>
      </main>
    </body>
  </html>
  `
}

function text({ url }: { url: string }) {
  return `Sign in to Portfoliwoah\n${url}\n\n`
}

