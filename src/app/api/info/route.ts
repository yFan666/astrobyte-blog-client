import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { SITE_NAME, SITE_DESCRIPTION, API_VERSION, IS_DEVELOPMENT } from '@/lib/env';
import { log } from 'console';

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
  } catch (err) {
    console.log(err);
  }

  // 只返回安全的公共环境变量
  return NextResponse.json({
    app: {
      name: SITE_NAME,
      description: SITE_DESCRIPTION,
      apiVersion: API_VERSION,
      environment: IS_DEVELOPMENT ? 'development' : 'production',
    },
    timestamp: new Date().toISOString(),
    status: 'ok',
  });
}
