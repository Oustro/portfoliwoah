import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { email } = await request.json()

  try {
    const user = await prisma.userInfo.findUnique({
      where: {
        email: email
      },
    });
  
    if (user) {
      await prisma.project.deleteMany({
        where: { 
          userInfoId: user.id
        },
      });
    }
      
    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
