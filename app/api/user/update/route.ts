import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { newEmployer, email } = await request.json()

  try {
    await prisma.userInfo.update({
      where: {
        email: email
      },
      data: {
        employer: newEmployer
      }
    })

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
