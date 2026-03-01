import { Metadata } from "next";
import { categories, getByCategory } from "@/lib/heritage-data";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}

export function generateMetadata({ params }: Props): Metadata {
  const category = categories.find((c) => c.id === params.id);
  return {
    title: `${category?.name || "分类"} - 非遗百科 | 档案AI共学社`,
    description: `探索中国${category?.name}类非物质文化遗产`,
  };
}

export default function CategoryPage({ params }: Props) {
  const category = categories.find((c) => c.id === params.id);
  
  if (!category) {
    notFound();
  }
  
  const items = getByCategory(category.name);
  
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 to-stone-100">
      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto">
          <Link 
            href="/heritage"
            className="text-stone-500 hover:text-amber-700 text-sm mb-4 inline-block"
          >
            ← 返回非遗百科
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <span className="text-stone-400 text-sm font-mono">{category.code}</span>
              <h1 className="text-3xl sm:text-4xl font-bold text-stone-800">
                {category.name}
              </h1>
            </div>
          </div>
        </div>
      </section>

      {/* Items Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {items.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {items.map((item) => (
                <Link
                  key={item.id}
                  href={`/heritage/item/${item.id}`}
                  className="group block bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 border border-stone-100"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-stone-800 group-hover:text-amber-700 transition-colors">
                      {item.name}
                    </h3>
                    <span className="text-xs bg-amber-100 text-amber-800 px-2 py-1 rounded-full">
                      {item.level}
                    </span>
                  </div>
                  
                  <p className="text-stone-600 text-sm mb-3 line-clamp-2">
                    {item.summary}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-stone-500">📍 {item.region.slice(0, 20)}...</span>
                    <span className="text-amber-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      查看详情 →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 text-stone-500">
              <p>该分类下暂无数据，正在整理中... 📝</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
