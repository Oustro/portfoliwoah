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
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
      .sora {
        font-family: 'Sora', sans-serif;
      }
      .ibm-plex-serif {
        font-family: 'IBM Plex Serif', serif;
        font-weight: 300;
        font-style: italic;
      }
    </style>
    </head>
    <body class="sora">
    <main class="relative min-h-screen justify-center overflow-hidden transition-all px-4">
      <div class="mt-20 text-center">
          <div class="px-2 text-sm py-1 rounded-lg inline-block border-2 border-slate-200">
              Welcome to the newly launched Portfoliwoah 🎉
            </div>
            <h1 class='mt-8 text-4xl sora'>For the Love of <span class="ibm-plex-serif">Design</span>.</h1>
            <p class="mt-8 text-base">Share what your proud of and connect with others who love design.</p>
            <div class="mt-4 text-center">
            <a href="${url}">
              <div class="text-sm p-3 inline-block rounded-lg bg-slate-200 hover:bg-slate-300 transition cursor-pointer">Use Magic Link</div></a>
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

