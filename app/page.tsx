import { Metadata } from "next";
import { HeroSection } from "@/components/hero-section";
import { FeatureCards } from "@/components/feature-cards";
import { AgentShowcase } from "@/components/agent-showcase";

export const metadata: Metadata = {
  title: "AI非遗工坊 - 用科技传承文化",
  description: "AI+非物质文化遗产体验平台，让传统艺术在数字时代焕发新生",
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-stone-50 to-stone-100">
      <HeroSection />
      <FeatureCards />
      <AgentShowcase />
    </main>
  );
}
