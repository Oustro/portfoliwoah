import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { uname } = await request.json()

  try {

    const validUname = await prisma.userInfo.findFirst({
      where: {
        uname: {
          contains: uname || "",
          mode: 'insensitive'
        }
      }

    })

    if (validUname) {
      return NextResponse.json({ "message": "error" }, { status: 403 })
    }

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
