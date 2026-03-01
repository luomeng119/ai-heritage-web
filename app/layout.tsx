import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI非遗工坊 - 用科技传承文化",
  description: "AI+非物质文化遗产体验平台，让传统艺术在数字时代焕发新生",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
