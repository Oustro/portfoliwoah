import { NextResponse, NextRequest } from 'next/server'
import { put } from '@vercel/blob'

export async function GET(request: NextRequest) {

  const url = request.nextUrl.searchParams.get('url');
  
  let browser: any | undefined | null

  try {

    if (process.env.NODE_ENV !== 'development') {
      const chromium = require('@sparticuz/chromium')
      const puppeteer = require('puppeteer-core')
      browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      })
    } 
    else {
      const puppeteer = require('puppeteer')
      browser = await puppeteer.launch({headless: 'new'})
    }

    let page = await browser.newPage()
    await page.goto(url)
    const imageBuffer = await page.screenshot()

    const filename = 'uploaded_on_' + Date.now() + '.jpg'

    const blob = await put(filename, imageBuffer, {
      access: 'public',
      token: process.env.BLOB_READ_WRITE_TOKEN
    });

    return NextResponse.json({ "posts": blob.url, "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
