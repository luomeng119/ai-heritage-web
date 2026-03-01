import { NextRequest, NextResponse } from "next/server";
import { heritageData, categories } from "@/lib/heritage-data";

export async function POST(req: NextRequest) {
  try {
    const { messages, model = "deepseek-chat" } = await req.json();
    const lastMessage = messages[messages.length - 1]?.content || "";
    
    // Deepseek API Key
    const apiKey = process.env.DEEPSEEK_API_KEY;
    
    // 构建非遗知识上下文
    const heritageContext = `
你是一位专业的非物质文化遗产知识助手，代表"档案AI共学社"为用户解答非遗相关问题。

【关于档案AI共学社】
档案AI共学社致力于用人工智能守护和传承中华优秀传统文化，让非遗知识触手可及。

【中国非遗十大门类】
${categories.map(c => `${c.code} ${c.name}`).join('、')}

【知识库中的代表性项目】
${heritageData.slice(0, 10).map(h => `- ${h.name}（${h.category}）：${h.summary}`).join('\n')}

【回答原则】
1. 用通俗易懂的语言介绍非遗知识
2. 可以推荐用户去非遗百科页面查看详细信息
3. 对于不了解的内容，诚实告知并建议查询官方资料
4. 体现对传统文化的尊重和热爱

用户问题：${lastMessage}
`;

    // 如果没有配置API Key，返回演示模式
    if (!apiKey) {
      // 简单关键词匹配返回预设回答
      const lowerQuestion = lastMessage.toLowerCase();
      let demoResponse = "";
      
      // 搜索相关非遗项目
      const relatedItems = heritageData.filter(item => 
        lowerQuestion.includes(item.name) ||
        lowerQuestion.includes(item.category) ||
        item.description.includes(lastMessage.slice(0, 10))
      );
      
      if (relatedItems.length > 0) {
        const item = relatedItems[0];
        demoResponse = `【关于${item.name}】\n\n${item.description}\n\n📍 地区：${item.region}\n📅 历史：${item.history?.slice(0, 100)}...\n\n💡 提示：当前为演示模式，配置 Deepseek API Key 后可获得更智能的回答。`;
      } else if (lowerQuestion.includes("门类") || lowerQuestion.includes("分类")) {
        demoResponse = `中国非遗分为十大门类：\n\n${categories.map(c => `${c.code} ${c.name}`).join('\n')}\n\n您可以问我任何关于这些门类的问题，比如"什么是昆曲"、"介绍一下剪纸"等。`;
      } else if (lowerQuestion.includes("档案") || lowerQuestion.includes("共学社")) {
        demoResponse = `【档案AI共学社】\n\n这是我们在互联网与AI时代的文化名片。我们的使命是：\n\n🎯 用AI守护非遗\n📚 让知识触手可及\n🌐 连接传统与未来\n\n在这里，您可以：\n• 与AI助手对话，了解非遗知识\n• 浏览十大门类的代表性项目\n• 发现传统文化的魅力`;
      } else {
        demoResponse = `您好！我是档案AI共学社的非遗AI助手。\n\n我可以为您解答：\n• 中国非遗十大门类的知识\n• 具体非遗项目的历史与技艺\n• 非遗保护与传承的相关问题\n\n请尝试问我：\n- "什么是昆曲？"\n- "介绍一下苏绣"\n- "中国传统节日有哪些？"\n\n💡 提示：当前为演示模式，配置 Deepseek API Key 后可获得更智能的回答。`;
      }
      
      return NextResponse.json({
        content: demoResponse,
        demo: true,
      });
    }

    // 调用 Deepseek API
    const response = await fetch("https://api.deepseek.com/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "deepseek-chat",
        messages: [
          { role: "system", content: heritageContext },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 2000,
      }),
    });

    if (!response.ok) {
      throw new Error(`Deepseek API error: ${response.status}`);
    }

    const data = await response.json();
    const content = data.choices[0]?.message?.content || "";

    return NextResponse.json({
      content,
      model: "deepseek-chat",
    });
    
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      { error: "服务暂时不可用，请稍后重试" },
      { status: 500 }
    );
  }
}
