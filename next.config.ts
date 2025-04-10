import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 启用压缩，减小传输体积
  compress: true,

  // 移除 X-Powered-By 头，增强安全性
  poweredByHeader: false,

  // 启用 React 严格模式，帮助发现潜在问题
  reactStrictMode: true,

  // 图片优化配置
  images: {
    // 允许加载的图片域名
    domains: ['your-image-domain.com'],
    // 支持的图片格式，优先使用现代格式
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ protocol: 'https', hostname: 'img.k2r2.com' }],
  },

  // 实验性功能配置
  experimental: {
    // 优化 CSS 输出
    optimizeCss: true,
  },

  // 输出配置
  output: 'standalone', // 生成独立的构建输出，减小体积

  // 环境变量配置
  env: {
    // 可以在这里定义环境变量
    API_URL: process.env.API_URL,
  },

  // 重写配置，用于 API 代理等
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://your-api-server/api/:path*',
      },
    ];
  },
};

export default nextConfig;
