export type Contact = {
  label: string;
  value: string;
  href?: string;
};

export type Education = {
  school: string;
  degree: string;
  period: string;
  location: string;
  highlights: string[];
};

import { projects } from "./projects";

export type { Project, ProjectFollowUp, ProjectLink } from "./projects";

export type Profile = {
  name: string;
  headline: string;
  subtitle: string;
  intro: string;
  location: string;
  avatar?: string;
  keywords: string[];
  contacts: Contact[];
  capabilities: {
    title: string;
    label: string;
    description: string;
  }[];
  education: Education[];
  projects: typeof projects;
};

export const profile: Profile = {
  name: "滕琳",
  headline: "心理学 × 产品 × AI探索",
  subtitle: "From understanding people to building products, to amplifying expression with AI.",
  intro:
    "用产品思维拆解复杂问题，用心理学视角理解人的需求。",
  location: "全国各地",
  avatar: "/images/projects/me.jpg",
  keywords: ["应用心理硕士", "AI 产品", "产品思维", "心理健康", "内容设计"],
  contacts: [
    {
      label: "Email",
      value: "tenglin0202@foxmail.com",
      href: "mailto:tenglin0202@foxmail.com",
    },
    {
      label: "Location",
      value: "中国",
    },
    {
      label: "Phone",
      value: "13021968818",
      href: "tel:13021968818",
    },
  ],
  capabilities: [
    {
      title: "Complex Problem Deconstruction & Structuring",
      label: "复杂问题拆解与结构化",
      description:
        "擅长将复杂、模糊的规则与需求梳理为清晰可执行的框架，从中提炼出可配置、可复用的系统结构。",
    },
    {
      title: "Deep Empathy & Need Discovery",
      label: "深度共情与需求洞察",
      description:
        "擅长通过小范围深度沟通，进入对方的语言体系与思维框架，捕捉需求背后真实动机与未言明的期待",
    },
    {
      title: "Zero-to-One Building & Execution",
      label: "从零到一的构建与落地",
      description:
        "能使用AI独立将想法从概念推进至可用的产品，完整覆盖框架设计、前后端搭建到真实用户测试的全流程。",
    },
  ],
  education: [
    {
      school: "北京师范大学",
      degree: "应用心理 硕士 / 心理学部",
      period: "2019.09 - 2021.06",
      location: "北京",
      highlights: ["荣誉奖项：学业一等奖学金（2020）", "关注社会心理学心理健康的应用场景"],
    },
    {
      school: "江南大学",
      degree: "产品设计 本科 / 设计学院",
      period: "2015.09 - 2019.06",
      location: "无锡",
      highlights: ["产品设计与用户体验基础训练", "具备从用户需求到界面表达的设计思维"],
    },
  ],
  projects,
};
