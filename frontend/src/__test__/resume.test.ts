import {
  PROFILE,
  EXPERIENCES,
  SKILL_GROUPS,
  PROJECTS,
  CERTIFICATIONS,
  EDUCATION,
} from '../data/resume';

describe("Resume data integrity", () => {
  test("profile has required fields", () => {
    expect(PROFILE.name).toBeTruthy();
    expect(PROFILE.email).toMatch(/@/);
    expect(PROFILE.linkedin).toMatch(/linkedin\.com/);
    expect(PROFILE.yearsOfExperience).toBeGreaterThanOrEqual(10);
  });

  test("experiences are non-empty and well-formed", () => {
    expect(EXPERIENCES.length).toBeGreaterThanOrEqual(5);
    EXPERIENCES.forEach((e) => {
      expect(e.role).toBeTruthy();
      expect(e.company).toBeTruthy();
      expect(e.period).toBeTruthy();
      expect(Array.isArray(e.bullets)).toBe(true);
      expect(e.bullets.length).toBeGreaterThan(0);
      expect(Array.isArray(e.tech)).toBe(true);
    });
  });

  test("skill groups all carry at least 3 skills", () => {
    expect(SKILL_GROUPS.length).toBeGreaterThanOrEqual(4);
    SKILL_GROUPS.forEach((g) => {
      expect(g.items.length).toBeGreaterThanOrEqual(3);
    });
  });

  test("projects exist and include tech + image", () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(3);
    PROJECTS.forEach((p) => {
      expect(p.title).toBeTruthy();
      expect(p.image).toMatch(/^https?:\/\//);
      expect(p.tech.length).toBeGreaterThan(0);
    });
  });

  test("education and certifications present", () => {
    expect(EDUCATION.degree).toMatch(/Computer Science/i);
    expect(CERTIFICATIONS.length).toBeGreaterThanOrEqual(1);
  });
});
