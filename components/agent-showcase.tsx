"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Send, Loader2 } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const MODELS = [
  { id: "openai", name: "OpenAI", badge: "GPT-4" },
  { id: "anthropic", name: "Anthropic", badge: "Claude" },
  { id: "google", name: "Google", badge: "Gemini" },
  { id: "azure", name: "Azure", badge: "OpenAI" },
];

export function AgentShowcase() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "您好！我是非遗智能助手，精通各类非物质文化遗产知识。请问您想了解哪方面的非遗文化？",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [selectedModel, setSelectedModel] = useState("openai");

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, { role: "user", content: userMessage }],
          model: selectedModel,
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: `【演示模式】您选择了 ${selectedModel} 模型。实际部署需要配置对应API Key。\n\n关于您的问题"${userMessage}"，我可以告诉您：中国拥有43项联合国教科文组织非遗名录项目，包括京剧、昆曲、古琴艺术等。` },
        ]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: `【演示模式】您选择了 ${selectedModel} 模型。实际部署需要配置对应API Key。` },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-stone-800 mb-4">
            非遗智能助手
          </h2>
          <p className="text-stone-600">
            集成多家AI模型，为您答疑解惑
          </p>
        </div>

        <Card className="border-stone-200 shadow-lg">
          <CardHeader className="border-b border-stone-100">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                非遗AI助手
              </CardTitle>
              <div className="flex gap-2">
                {MODELS.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedModel(m.id)}
                    className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                      selectedModel === m.id
                        ? "bg-stone-800 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    {m.name}
                    <Badge variant="secondary" className="ml-1 text-[10px]">
                      {m.badge}
                    </Badge>
                  </button>
                ))}
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-6 space-y-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex ${
                    msg.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      msg.role === "user"
                        ? "bg-stone-800 text-white"
                        : "bg-stone-100 text-stone-800"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-stone-100 px-4 py-3 rounded-2xl flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin" />
                    思考中...
                  </div>
                </div>
              )}
            </div>
            <div className="border-t border-stone-100 p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="请输入您的问题..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  className="flex-1"
                />
                <Button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  className="bg-stone-800 hover:bg-stone-700"
                >
                  {isLoading ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <Send className="w-4 h-4" />
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
