import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

export async function POST(request: NextRequest) {

  const { link, email } = await request.json()

  try {

    const project = await prisma.project.findUnique({
      where: {
        link: link
      }
    })

    if (project?.userEmail !== email && email) {
      await prisma.project.update({
        where: {
          link: link,
        },
        data: {
          clicks: {
            increment: 1
          }
        }
      })
    }

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
