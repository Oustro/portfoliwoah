import { NextResponse, NextRequest } from 'next/server'
import prisma from '@/utils/db'
import { Prisma } from '@prisma/client';

import { cardData } from '@/lib/types';

export async function GET(request: NextRequest) {

  const employer = request.nextUrl.searchParams.get('employer')

  try {

    const alpha = 0.1

    let additionalWhereClause = '';
    if (employer) {
      additionalWhereClause = `WHERE LOWER(u."employer") = LOWER('${employer.replace(/'/g, "''")}')`;
    }
    
    const posts = await prisma.$queryRaw`
      SELECT p.*, 
            u.*,
            p."clicks" / (1 + ${alpha} * EXTRACT(EPOCH FROM (NOW() - p."created") / 3600)) as "score"
      FROM "Project" as p
      LEFT JOIN "UserInfo" as u ON p."userEmail" = u."email"
      ${Prisma.sql([additionalWhereClause])}
      ORDER BY "score" DESC
    ` as cardData

    return NextResponse.json({ "posts": posts, "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
