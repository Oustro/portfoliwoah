import { Redis } from '@upstash/redis'
import { NextResponse, NextRequest } from 'next/server'


export async function POST(request: NextRequest) {

  const { name, employer, email } = await request.json()

  try {
    const redis = new Redis({
      url: process.env.UPSTASH_URL || '',
      token: process.env.UPSTASH_TOKEN || '',
    })
    
    await redis.set(email, {
      name: name,
      employer: employer,
      email: email
    },
    {
      ex: 60 * 60 * 24,
      nx: true
    })

    return NextResponse.json({ "message": "success" }, { status: 200 })
  
  } catch (e) {
    console.log(e)
    return NextResponse.json({ "message": "error" }, { status: 500 })
  }
}
