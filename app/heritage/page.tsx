import { Metadata } from "next";
import { categories, getCategoryStats } from "@/lib/heritage-data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "非遗百科 - 档案AI共学社",
  description: "中国非物质文化遗产十大门类百科，涵盖民间文学、传统音乐、传统舞蹈、传统戏剧、曲艺、传统体育游艺杂技、传统美术、传统技艺、传统医药、民俗",
};

export default function HeritagePage() {
  const stats = getCategoryStats();
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Hero */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-stone-800 mb-4">
            非遗百科
          </h1>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            中国非物质文化遗产十大门类，1557项国家级代表性项目
            <br />
            <span className="text-amber-700 font-medium">
              档案AI共学社 · 守护文化根脉
            </span>
          </p>
        </div>
      </section>

      {/* 十大门类 */}
      <section className="pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stats.map((cat) => (
              <Link
                key={cat.id}
                href={`/heritage/category/${cat.id}`}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-stone-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="text-4xl">{cat.icon}</span>
                  <span className="text-stone-400 text-sm font-mono">
                    {cat.code}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-stone-800 mb-2 group-hover:text-amber-700 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-stone-500 text-sm">
                  {cat.count} 项代表性项目
                </p>
                <div className="mt-4 flex items-center text-amber-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  浏览项目 →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 关于我们 */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-stone-800 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">关于档案AI共学社</h2>
          <p className="text-stone-300 leading-relaxed">
            这是我们在互联网与AI时代的文化名片。
            我们相信，人工智能可以成为传承非遗文化的新载体。
            通过知识整合与智能对话，让千年文化在数字时代焕发新生。
          </p>
        </div>
      </section>
    </main>
  );
}
