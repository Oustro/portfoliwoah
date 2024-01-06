import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { email } = await request.json()

  try {

    const validEmail = await prisma.userInfo.findFirst({
      where: {
        email: {
          equals: email || "",
          mode: 'insensitive'
        }
      }
    })

    if (validEmail) {
      return NextResponse.json({ "message": "error" }, { status: 403 })
    }

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
