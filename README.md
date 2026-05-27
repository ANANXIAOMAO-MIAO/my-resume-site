# 滕琳 · Personal Portfolio

面向求职与面试场景的个人作品集网站，呈现心理学背景、AI 产品实践与项目案例。

## 在线访问

部署后可通过 Render 提供的地址访问（在 Render Dashboard 中查看 **Live URL**）。

## 技术栈

- [Astro](https://astro.build/) 6 + TypeScript
- 静态站点生成（SSG）
- 内容以 TypeScript 数据文件维护，无需 CMS

## 功能概览

- **首页**：个人介绍、能力概览、教育经历、工作经历时间轴、项目卡片展示
- **项目详情**：背景 / 挑战 / 方案 / 成果 / 问题与后续，左侧章节导航 + 右侧内容区
- **项目外链**：支持在详情页展示项目地址（如 LOOKLOOK、飞书文档等）
- **响应式布局**：适配桌面与移动端

## 精选项目

| 项目 | 说明 |
|------|------|
| LOOKLOOK-学术速递 | 四阶段 AI 文献速递工具，面向需要学术背书的内容创作者 |
| THOUGHT COUNT-信念法庭 | 将 CBT 认知重构融入仪式化「法庭」流程的轻量工具 |
| AI 疗愈助手 | 基于动机性访谈与 CBT 的 Prompt Engineering 对话架构设计 |

## 本地开发

```bash
# 安装依赖
npm install

# 启动开发服务器（默认 http://localhost:4321）
npm run dev

# 类型检查
npm run check

# 运行测试
npm test

# 构建生产版本（输出到 dist/）
npm run build

# 本地预览构建结果
npm run preview
```

## 项目结构

```
personal-web/
├── public/images/projects/   # 静态图片资源
├── src/
│   ├── components/           # Astro 组件
│   ├── content/              # 文案与数据
│   │   ├── profile.ts        # 个人信息、教育、能力
│   │   ├── experiences.ts    # 工作经历
│   │   └── projects.ts       # 项目案例
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro       # 首页
│   │   └── projects/[slug].astro
│   └── styles/global.css
├── astro.config.mjs
└── package.json
```

## 修改内容

主要文案与数据在 `src/content/` 下编辑后保存，本地 `npm run dev` 即可预览。图片放入 `public/images/projects/`，在对应 content 文件里引用路径（需带扩展名，如 `.png`）。

## 部署（Render）

1. 在 [Render](https://render.com) 创建 **Static Site**
2. 连接本仓库，分支选 `main`
3. **Build Command**：`npm install && npm run build`
4. **Publish Directory**：`dist`

推送 `main` 分支后 Render 会自动重新构建。

## 许可证

ISC
