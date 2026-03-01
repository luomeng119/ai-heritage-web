import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { categories, heritageData } from "@/lib/heritage-data";
import { 
  Sparkles, 
  BookOpen, 
  MessageCircle, 
  ChevronRight,
  Search
} from "lucide-react";

export const metadata: Metadata = {
  title: "档案AI共学社 - AI赋能非物质文化遗产",
  description: "用人工智能守护和传承中华优秀传统文化，让非遗知识触手可及。探索十大门类1557项国家级非遗，与AI助手对话学习。",
};

export default function Home() {
  // 精选展示项目
  const featuredItems = heritageData.slice(0, 4);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-800 text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            AI + 非物质文化遗产
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 tracking-tight">
            档案AI共学社
          </h1>
          
          <p className="text-xl text-stone-600 max-w-2xl mx-auto mb-4 leading-relaxed">
            用人工智能守护和传承中华优秀传统文化
          </p>
          
          <p className="text-stone-500 max-w-xl mx-auto mb-10">
            探索十大门类1557项国家级非遗，与AI助手对话，让千年文化在数字时代焕发新生
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/chat">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-8">
                <MessageCircle className="w-5 h-5 mr-2" />
                体验AI助手
              </Button>
            </Link>
            
            <Link href="/heritage">
              <Button size="lg" variant="outline" className="text-lg px-8 border-stone-300">
                <BookOpen className="w-5 h-5 mr-2" />
                浏览非遗百科
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* 十大门类 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
                十大门类
              </h2>
              <p className="text-stone-500 mt-1">中国非遗分类体系</p>
            </div>
            
            <Link 
              href="/heritage"
              className="flex items-center gap-1 text-amber-600 hover:text-amber-700 font-medium"
            >
              查看全部 <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.id}
                href={`/heritage/category/${cat.id}`}
                className="group p-4 rounded-xl bg-stone-50 hover:bg-amber-50 border border-stone-100 hover:border-amber-200 transition-all text-center"
              >
                <span className="text-3xl mb-2 block">{cat.icon}</span>
                <span className="text-sm font-medium text-stone-700 group-hover:text-amber-700">
                  {cat.name}
                </span>
                <span className="text-xs text-stone-400 block mt-1">{cat.code}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 精选项目 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-stone-800">
                精选非遗
              </h2>
              <p className="text-stone-500 mt-1">代表性非物质文化遗产项目</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredItems.map((item) => (
              <Link
                key={item.id}
                href={`/heritage/item/${item.id}`}
                className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border border-stone-100"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-2xl">{
                    categories.find(c => c.name === item.category)?.icon
                  }</span>
                  <span className="text-xs bg-amber-100 text-amber-800 px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                  {item.name}
                </h3>
                
                <p className="text-sm text-stone-600 line-clamp-2 mb-3">
                  {item.summary}
                </p>
                
                <div className="flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  了解详情 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI助手 CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-3xl font-bold mb-4">有问题？问AI助手</h2>
          
          <p className="text-stone-300 mb-8 text-lg">
            随时与AI对话，深入了解非遗知识
            <br />
            从历史渊源到技艺特点，为您解答一切问题
          </p>
          
          <Link href="/chat">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-lg px-10">
              开始对话
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-stone-900 text-stone-400">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">
            © 2024 档案AI共学社 · 用AI守护非遗，让传统活在当下
          </p>
        </div>
      </footer>
    </main>
  );
}
