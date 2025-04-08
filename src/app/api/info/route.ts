import { NextResponse } from 'next/server';
import { SITE_NAME, SITE_DESCRIPTION, API_VERSION, IS_DEVELOPMENT } from '@/lib/env';

export async function GET() {
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
