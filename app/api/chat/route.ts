import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { messages, model } = await req.json();
    
    // 获取对应模型的API Key（环境变量配置）
    const getApiKey = (provider: string) => {
      switch (provider) {
        case "openai": return process.env.OPENAI_API_KEY;
        case "anthropic": return process.env.ANTHROPIC_API_KEY;
        case "google": return process.env.GOOGLE_API_KEY;
        case "azure": return process.env.AZURE_API_KEY;
        default: return null;
      }
    };

    const apiKey = getApiKey(model);
    
    // MVP阶段：如果未配置API Key，返回演示模式响应
    if (!apiKey) {
      return NextResponse.json({
        content: `【演示模式】当前使用的是 ${model} 模型通道。\n\n实际部署时，请在环境变量中配置对应API Key即可启用真实AI对话。\n\n中国非遗资源丰富，包括：\n• 世界级非遗：京剧、昆曲、古琴艺术、蒙古族长调民歌等\n• 传统技艺：剪纸、刺绣、陶瓷、木雕、漆器\n• 节庆民俗：春节、清明节、端午节、中秋节`,
        demo: true,
      });
    }

    // 实际调用AI模型的逻辑（预留）
    // 根据model参数调用不同提供商的API
    
    return NextResponse.json({
      content: "AI响应内容",
      model,
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
