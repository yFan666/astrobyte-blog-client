import { formatDate, getRelativeTime } from '@/lib/date';

/**
 * 博客文章相关的工具函数
 */

export interface BlogPost {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
  };
}

/**
 * 格式化博客文章
 * @param post 博客文章对象
 * @returns 格式化后的博客文章对象
 */
export function formatBlogPost(post: BlogPost): BlogPost {
  return {
    ...post,
    createdAt: formatDate(post.createdAt),
    updatedAt: getRelativeTime(post.updatedAt),
  };
}

/**
 * 生成文章摘要
 * @param content 文章内容
 * @param length 摘要长度，默认为 150
 * @returns 文章摘要
 */
export function generateExcerpt(content: string, length = 150): string {
  // 移除 Markdown 标记
  const plainText = content
    .replace(/```[\s\S]*?```/g, '') // 移除代码块
    .replace(/`[^`]+`/g, '') // 移除行内代码
    .replace(/#{1,6}\s/g, '') // 移除标题
    .replace(/\*\*([^*]+)\*\*/g, '$1') // 移除加粗
    .replace(/\*([^*]+)\*/g, '$1') // 移除斜体
    .replace(/!\[([^\]]+)\]\([^)]+\)/g, '') // 移除图片
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') // 移除链接
    .replace(/\n/g, ' ') // 替换换行为空格
    .replace(/\s+/g, ' ') // 合并多个空格
    .trim();

  return plainText.length > length ? plainText.slice(0, length) + '...' : plainText;
}

/**
 * 生成文章 slug
 * @param title 文章标题
 * @returns 文章 slug
 */
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // 移除特殊字符
    .replace(/\s+/g, '-') // 替换空格为连字符
    .replace(/-+/g, '-') // 合并多个连字符
    .trim();
}
