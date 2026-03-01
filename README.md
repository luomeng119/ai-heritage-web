# AI+非遗网站 MVP

## 项目简介
AI与非物质文化遗产结合的Web应用，支持多AI模型接入。

## 核心功能
1. **非遗智能助手** - 多模型AI对话（OpenAI/Claude/Gemini/Azure）
2. **AI纹样工坊** - 非遗风格图案生成
3. **非遗百科** - 非遗项目展示
4. **创作分享** - 用户作品分享社区

## 技术栈
- Next.js 14 + TypeScript
- Tailwind CSS + shadcn/ui
- Vercel AI SDK
- 多Provider支持（预留接口）

## 环境变量配置
```bash
# OpenAI
OPENAI_API_KEY=your_openai_key

# Anthropic
ANTHROPIC_API_KEY=your_anthropic_key

# Google
GOOGLE_API_KEY=your_google_key

# Azure
AZURE_API_KEY=your_azure_key
```

## 开发运行
```bash
npm install
npm run dev
```

## 部署
```bash
vercel --prod
```

## MVP进度
- [x] 项目初始化
- [x] 基础UI组件
- [x] 首页布局
- [x] 智能助手界面
- [x] API路由（预留多模型）
- [ ] 纹样生成页面
- [ ] 非遗百科数据
- [ ] 真实AI模型接入
