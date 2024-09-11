import { getCharismaModifiers } from "./getCharismaModifiers";

describe("getCharismaModifiers", () => {
  const template =
    "NPC Reactions: \x1b[36m%s\x1b[0m, Retainers Max #: \x1b[36m%s\x1b[0m, Retainers Loyalty: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for CHA equal 3", () => {
    const modifiers = getCharismaModifiers(3);

    expect(modifiers).toEqual([template, ["-2", "1", "4"]]);
  });

  it("should correctly get modifiers for CHA between 4 and 5", () => {
    const modifiers = getCharismaModifiers(4);

    expect(modifiers).toEqual([template, ["-1", "2", "5"]]);
  });

  it("should correctly get modifiers for CHA between 6 and 8", () => {
    const modifiers = getCharismaModifiers(7);

    expect(modifiers).toEqual([template, ["-1", "3", "6"]]);
  });

  it("should correctly get modifiers for CHA between 9 and 12", () => {
    const modifiers = getCharismaModifiers(10);

    expect(modifiers).toEqual([
      "Retainers Max #: \x1b[36m%s\x1b[0m, Retainers Loyalty: \x1b[36m%s\x1b[0m",
      ["4", "7"],
    ]);
  });

  it("should correctly get modifiers for CHA between 13 and 15", () => {
    const modifiers = getCharismaModifiers(14);

    expect(modifiers).toEqual([template, ["+1", "5", "8"]]);
  });

  it("should correctly get modifiers for CHA between 16 and 17", () => {
    const modifiers = getCharismaModifiers(16);

    expect(modifiers).toEqual([template, ["+1", "6", "9"]]);
  });

  it("should correctly get modifiers for CHA equal 18", () => {
    const modifiers = getCharismaModifiers(18);

    expect(modifiers).toEqual([template, ["+2", "7", "10"]]);
  });
});
