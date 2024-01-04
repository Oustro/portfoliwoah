import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { link, email, newImageLink } = await request.json()

  try {
    await prisma.project.update({
      where: {
        link: link,
        userEmail: email
      },
      data: {
        image: newImageLink
      }
    })

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
