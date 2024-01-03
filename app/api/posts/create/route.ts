import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'
import { projectData } from '@/lib/types'

export async function POST(request: NextRequest) {

  const postData = await request.json() as projectData

  try {

    await prisma.project.create({
      data: {
        name: postData.name,
        description: postData.description,
        created: new Date(),
        link: postData.link,
        image: postData.image,
        userEmail: postData.userEmail
      }
    })

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
