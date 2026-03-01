import type { Metadata } from "next";
import "./globals.css";
import { Navigation } from "@/components/navigation";

export const metadata: Metadata = {
  title: "档案AI共学社 - AI赋能非物质文化遗产",
  description: "用人工智能守护和传承中华优秀传统文化，让非遗知识触手可及。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
