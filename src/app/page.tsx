import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, BookOpen, Sparkles } from 'lucide-react';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Animation */}
      <HeroAnimation />

      {/* Features Section */}
      <section className="w-full py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">特色功能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="w-10 h-10 text-purple-500 mb-4" />
                <CardTitle>技术博客</CardTitle>
                <CardDescription>分享最新的技术见解和开发经验</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="w-10 h-10 text-blue-500 mb-4" />
                <CardTitle>学习笔记</CardTitle>
                <CardDescription>记录学习过程中的心得体会</CardDescription>
              </CardHeader>
            </Card>
            <Card className="group hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sparkles className="w-10 h-10 text-yellow-500 mb-4" />
                <CardTitle>项目展示</CardTitle>
                <CardDescription>展示个人项目和开发成果</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="w-full py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">最新文章</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <Card key={i} className="group hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle>示例文章 {i}</CardTitle>
                  <CardDescription>这是一篇示例文章的简短描述</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    这里是文章的内容预览，展示一些精彩的内容片段...
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
