"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Palette, BookOpen, Bot } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
      <div className="relative max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-8">
          <Sparkles className="w-4 h-4" />
          AI + 非物质文化遗产
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-900 mb-6 tracking-tight">
          用科技传承文化
        </h1>
        <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          探索人工智能与非物质文化遗产的融合之美。
          让千年技艺在数字时代焕发新生。
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-stone-800 hover:bg-stone-700 text-lg px-8">
            <Bot className="w-5 h-5 mr-2" />
            体验智能助手
          </Button>
          <Button size="lg" variant="outline" className="text-lg px-8 border-stone-300">
            <Palette className="w-5 h-5 mr-2" />
            AI创作工坊
          </Button>
        </div>
      </div>
    </section>
  );
}
