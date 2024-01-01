import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function GET(request: NextRequest) {

  const email = request.nextUrl.searchParams.get('email');

  try {

    const posts = prisma.project.findMany({
      where: {
        userEmail: email
      }
    })

    return NextResponse.json({ "posts": posts, "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
