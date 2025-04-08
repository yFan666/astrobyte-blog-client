/**
 * 环境变量配置
 * 提供类型安全的环境变量访问
 */

// API 配置
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
export const API_VERSION = process.env.NEXT_PUBLIC_API_VERSION || 'v1';

// 网站配置
export const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Astrobyte Blog';
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3333';
export const SITE_DESCRIPTION = process.env.NEXT_PUBLIC_SITE_DESCRIPTION || '一个现代化的博客平台';

// 社交媒体链接
export const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL || 'https://github.com/yFan666';
export const TWITTER_URL = process.env.NEXT_PUBLIC_TWITTER_URL;
export const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL;

// 第三方服务配置
export const GOOGLE_ANALYTICS_ID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;
export const UMAMI_WEBSITE_ID = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;

// 图片配置
export const IMAGE_CDN_URL = process.env.NEXT_PUBLIC_IMAGE_CDN_URL;
export const IMAGE_QUALITY = Number(process.env.NEXT_PUBLIC_IMAGE_QUALITY || '80');
export const IMAGE_FORMAT = process.env.NEXT_PUBLIC_IMAGE_FORMAT || 'webp';

// 功能开关
export const ENABLE_COMMENTS = process.env.NEXT_PUBLIC_ENABLE_COMMENTS === 'true';
export const ENABLE_DARK_MODE = process.env.NEXT_PUBLIC_ENABLE_DARK_MODE === 'true';
export const ENABLE_ANALYTICS = process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';

// 开发环境判断
export const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';

/**
 * 从环境变量中获取值，带有类型检查和默认值
 * @param key 环境变量键名
 * @param defaultValue 默认值
 * @returns 环境变量值或默认值
 */
export function getEnv<T>(key: string, defaultValue: T): T {
  const value = process.env[key];
  if (value === undefined) {
    return defaultValue;
  }

  // 尝试转换为对应类型
  try {
    if (typeof defaultValue === 'boolean') {
      return (value === 'true') as unknown as T;
    }
    if (typeof defaultValue === 'number') {
      return Number(value) as unknown as T;
    }
    return value as unknown as T;
  } catch {
    return defaultValue;
  }
}
