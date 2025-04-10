import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, BookOpen, Sparkles } from 'lucide-react';
import HeroAnimation from '@/components/HeroAnimation';

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section with Animation */}
      <HeroAnimation />

      <section className="w-full flex justify-center">
        <h1 className="text-4xl font-bold">Hello Next</h1>
      </section>
    </div>
  );
}
