import Link from "next/link";
import { BookOpen, MessageCircle, Sparkles } from "lucide-react";

export function Navigation() {
  return (
    <nav className="bg-white/80 backdrop-blur-md border-b border-stone-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <span className="font-bold text-stone-800">档案AI共学社</span>
            </div>
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-1 sm:gap-4">
            <Link
              href="/heritage"
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-stone-600 hover:text-amber-700 hover:bg-amber-50 transition-colors"
            >
              <BookOpen className="w-4 h-4" />
              <span className="hidden sm:inline">非遗百科</span>
            </Link>
            
            <Link
              href="/chat"
              className="flex items-center gap-1.5 px-4 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">AI助手</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
