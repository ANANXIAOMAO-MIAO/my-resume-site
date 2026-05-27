import { describe, expect, it } from "vitest";
import { profile } from "./profile";

describe("profile content", () => {
  it("uses the three featured portfolio projects", () => {
    expect(profile.projects.map((project) => project.slug)).toEqual([
      "ai-healing-assistant",
      "academic-briefing-tool",
      "belief-court-tool",
    ]);
  });

  it("does not render empty homepage keywords or project tags", () => {
    expect(profile.keywords.every((keyword) => keyword.trim().length > 0)).toBe(true);

    for (const project of profile.projects) {
      expect(project.tags.every((tag) => tag.trim().length > 0)).toBe(true);
    }
  });

  it("keeps three featured projects for the homepage grid", () => {
    const slugs = profile.projects.map((project) => project.slug);
    const featuredProjects = profile.projects.filter((project) => project.featured);

    expect(new Set(slugs).size).toBe(slugs.length);
    expect(profile.projects.length).toBe(3);
    expect(featuredProjects.length).toBe(3);
  });

  it("provides the fields required by project detail pages", () => {
    for (const project of profile.projects) {
      expect(project.title).toBeTruthy();
      expect(project.period).toBeTruthy();
      expect(project.role).toBeTruthy();
      expect(project.summary).toBeTruthy();
      expect(project.challenge).toBeTruthy();
      expect(project.solution).toBeTruthy();
      expect(project.result).toBeTruthy();
      expect(project.followUp.currentIssues).toBeTruthy();
      expect(project.followUp.nextSteps).toBeTruthy();
      expect(project.cover).toMatch(/^\/images\/projects\//);
    }
  });
});
