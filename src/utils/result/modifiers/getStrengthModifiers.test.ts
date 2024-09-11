import { getStrengthModifiers } from "./getStrengthModifiers";

describe("getStrengthModifiers", () => {
  const template = "Melee: \x1b[36m%s\x1b[0m, Open Doors: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for STR equal 3", () => {
    const modifiers = getStrengthModifiers(3);

    expect(modifiers).toEqual([template, ["-3", "1-in-6"]]);
  });

  it("should correctly get modifiers for STR between 4 and 5", () => {
    const modifiers = getStrengthModifiers(4);

    expect(modifiers).toEqual([template, ["-2", "1-in-6"]]);
  });

  it("should correctly get modifiers for STR between 6 and 8", () => {
    const modifiers = getStrengthModifiers(7);

    expect(modifiers).toEqual([template, ["-1", "1-in-6"]]);
  });

  it("should correctly get modifiers for STR between 9 and 12", () => {
    const modifiers = getStrengthModifiers(10);

    expect(modifiers).toEqual(["Open Doors: \x1b[36m%s\x1b[0m", ["2-in-6"]]);
  });

  it("should correctly get modifiers for STR between 13 and 15", () => {
    const modifiers = getStrengthModifiers(14);

    expect(modifiers).toEqual([template, ["+1", "3-in-6"]]);
  });

  it("should correctly get modifiers for STR between 16 and 17", () => {
    const modifiers = getStrengthModifiers(16);

    expect(modifiers).toEqual([template, ["+2", "4-in-6"]]);
  });

  it("should correctly get modifiers for STR equal 18", () => {
    const modifiers = getStrengthModifiers(18);

    expect(modifiers).toEqual([template, ["+3", "5-in-6"]]);
  });
});
