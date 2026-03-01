import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { prompt, style } = await req.json();
    
    // MVP阶段：返回演示模式响应
    return NextResponse.json({
      imageUrl: null,
      message: `【演示模式】您请求生成"${style}"风格的图案："${prompt}"\n\n实际部署时，将调用图像生成API（如DALL-E、Midjourney API、Stable Diffusion等）`,
      demo: true,
    });
    
  } catch (error) {
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
