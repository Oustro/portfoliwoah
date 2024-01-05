import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { link } = await request.json()

  try {

    const validLink = await prisma.project.findFirst({
      where: {
        link: {
          equals: link || "",
          mode: 'insensitive'
        }
      }

    })

    if (validLink) {
      return NextResponse.json({ "message": "error" }, { status: 403 })
    }

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
