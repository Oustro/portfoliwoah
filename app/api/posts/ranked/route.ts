import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'

import { cardData } from '@/lib/types';

export async function GET(request: NextRequest) {

  const employer = request.nextUrl.searchParams.get('employer');

  try {

    const alpha = 0.1

    const posts = await prisma.$queryRaw`
      SELECT p.*, 
            u.*,
            p."clicks" / (1 + ${alpha} * EXTRACT(EPOCH FROM (NOW() - p."created") / 3600)) as "score"
      FROM "Project" as p
      LEFT JOIN "UserInfo" as u ON p."userEmail" = u."email"
      ORDER BY "score" DESC
    ` as cardData

    return NextResponse.json({ "posts": posts, "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
