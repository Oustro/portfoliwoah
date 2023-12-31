import { NextResponse, NextRequest } from 'next/server'
import { put } from '@vercel/blob'

export async function GET(request: NextRequest) {

  const url = request.nextUrl.searchParams.get('url');
  
  let browser: any | undefined | null

  try {

    if (process.env.NODE_ENV !== 'development') {
      const chromium = require('@sparticuz/chromium-min')
      const puppeteer = require('puppeteer-core')
      browser = await puppeteer.launch({
        args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
        defaultViewport: {width: 1920, height: 1080},
        executablePath: await chromium.executablePath(
          "https://github.com/Sparticuz/chromium/releases/download/v119.0.2/chromium-v119.0.2-pack.tar"
        ),
        headless: chromium.headless,
        ignoreHTTPSErrors: true,
      })
    } 
    else {
      const puppeteer = require('puppeteer')
      browser = await puppeteer.launch({
        headless: 'new',
        defaultViewport: {width: 1920, height: 1080},
      })
    }

    let page = await browser.newPage()
    await page.goto(url, {
      waitUntil: 'networkidle2'
    })
    const imageBuffer = await page.screenshot()

    const filename = 'uploaded_on_' + Date.now() + '.jpg'

    const blob = await put(filename, imageBuffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN
    });

    await page.close()
    await browser.close()

    return NextResponse.json({ "imageUrl": blob.url, "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
