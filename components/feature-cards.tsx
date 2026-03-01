"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, Palette, BookOpen, Share2 } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "智能非遗助手",
    description: "集成OpenAI、Claude、Gemini等多家AI模型，为您解答非遗相关问题",
    color: "bg-blue-100 text-blue-700",
  },
  {
    icon: Palette,
    title: "AI纹样工坊",
    description: "输入描述即可生成非遗风格图案，支持剪纸、刺绣、年画等多种风格",
    color: "bg-amber-100 text-amber-700",
  },
  {
    icon: BookOpen,
    title: "非遗百科",
    description: "涵盖世界级、国家级非遗项目，图文并茂展示传统技艺之美",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Share2,
    title: "创作分享",
    description: "分享您的AI创作作品，与志同道合的文化爱好者交流",
    color: "bg-rose-100 text-rose-700",
  },
];

export function FeatureCards() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">核心功能</h2>
          <p className="text-stone-600 max-w-xl mx-auto">
            融合前沿AI技术与传统文化，打造沉浸式非遗体验平台
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="border-stone-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className={`w-12 h-12 rounded-xl ${feature.color} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-stone-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
