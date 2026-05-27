import { describe, expect, it } from "vitest";
import { timelineExperiences } from "./experiences";

describe("timeline experiences", () => {
  it("keeps five experiences ordered from newest to oldest", () => {
    expect(timelineExperiences.map((experience) => experience.organization)).toEqual([
      "独立 AI 产品实践",
      "个人心理咨询工作室",
      "瓜子二手车",
      "网易有道事业群",
      "猿辅导",
    ]);
  });

  it("stores highlights as multiline text instead of bullet arrays", () => {
    for (const experience of timelineExperiences) {
      expect(typeof experience.highlights).toBe("string");
      expect(experience.highlights.trim().length).toBeGreaterThan(0);
    }

    expect(timelineExperiences[2].highlights).toContain("\n");
  });
});
