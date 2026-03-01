# AI非遗知识平台 - 档案AI共学社

## 项目定位
**档案AI共学社**在互联网与AI时代的数字名片
- 知识面广：涵盖十大门类1557项国家级非遗
- 互动便捷：AI助手随时解答非遗问题
- 传承文化：让非遗知识触手可及

## 核心功能（调整后的MVP）

### ✅ 必须实现
1. **非遗知识库** - 十大门类分类展示
2. **AI智能助手** - 接入Deepseek，支持多轮对话
3. **项目详情页** - 每个非遗项目的详细介绍
4. **搜索发现** - 按门类/地区/关键词搜索

### ❌ 暂不做
- AI图像生成（定位偏离）
- 用户上传作品
- 社交功能

## 数据库设计

### 非遗项目表 HeritageItem
- id, name(名称), category(门类), region(地区)
- description(简介), history(历史), technique(技艺)
- inheritance(传承), images(图片), video(视频)
- createdAt, updatedAt

### 对话历史表 ChatHistory
- id, sessionId, messages(JSON), model
- createdAt

## 品牌信息
- 作者：档案AI共学社
- 理念：用AI守护非遗，让传统活在当下
