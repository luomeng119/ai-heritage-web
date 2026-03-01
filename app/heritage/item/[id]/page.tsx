import { Metadata } from "next";
import { getHeritageById, categories } from "@/lib/heritage-data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const item = getHeritageById(params.id);
  return {
    title: `${item?.name || "项目详情"} - 档案AI共学社`,
    description: item?.summary,
  };
}

export default function ItemPage({ params }: Props) {
  const item = getHeritageById(params.id);
  
  if (!item) {
    notFound();
  }
  
  const category = categories.find((c) => c.name === item.category);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Breadcrumb */}
      <section className="py-6 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/heritage" className="hover:text-amber-700">非遗百科</Link>
            <span>/</span>
            <Link 
              href={`/heritage/category/${category?.id}`}
              className="hover:text-amber-700"
            >
              {item.category}
            </Link>
            <span>/</span>
            <span className="text-stone-800">{item.name}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="text-4xl mb-4 block">{category?.icon}</span>
                <h1 className="text-3xl sm:text-4xl font-bold text-stone-800 mb-2">
                  {item.name}
                </h1>
                
                {item.code && (
                  <span className="text-stone-400 font-mono text-sm">
                    编号：{item.code}
                  </span>
                )}
              </div>
              
              <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                {item.level}
              </span>
            </div>
            
            <p className="text-xl text-stone-600 leading-relaxed">
              {item.summary}
            </p>
          </div>

          {/* Details */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Main Info */}
            <div className="md:col-span-2 space-y-6">
              {item.description && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span>📖</span> 项目介绍
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{item.description}</p>
                </div>
              )}
              
              {item.history && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span>📜</span> 历史渊源
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{item.history}</p>
                </div>
              )}
              
              {item.technique && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span>🎨</span> 技艺特点
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{item.technique}</p>
                </div>
              )}
              
              {item.value && (
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-xl font-bold text-stone-800 mb-4 flex items-center gap-2">
                    <span>💎</span> 文化价值
                  </h2>
                  <p className="text-stone-600 leading-relaxed">{item.value}</p>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="font-bold text-stone-800 mb-4">基本信息</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-stone-500">门类：</span>
                    <span className="text-stone-800">{item.category}</span>
                  </div>
                  <div>
                    <span className="text-stone-500">地区：</span>
                    <span className="text-stone-800">{item.region}</span>
                  </div>
                  <div>
                    <span className="text-stone-500">级别：</span>
                    <span className="text-stone-800">{item.level}</span>
                  </div>
                  <div>
                    <span className="text-stone-500">批次：</span>
                    <span className="text-stone-800">第{item.batch}批</span>
                  </div>
                  {item.code && (
                    <div>
                      <span className="text-stone-500">编号：</span>
                      <span className="text-stone-800 font-mono">{item.code}</span>
                    </div>
                  )}
                </div>
              </div>

              <Link
                href="/chat"
                className="block w-full bg-amber-600 hover:bg-amber-700 text-white text-center py-3 rounded-xl font-medium transition-colors"
              >
                🤖 向AI助手提问
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
