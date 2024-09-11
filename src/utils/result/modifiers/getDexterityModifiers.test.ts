import { getDexterityModifiers } from "./getDexterityModifiers";

describe("getDexterityModifiers", () => {
  const template =
    "AC: \x1b[36m%s\x1b[0m, Missile: \x1b[36m%s\x1b[0m, Initiative: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for DEX equal 3", () => {
    const modifiers = getDexterityModifiers(3);

    expect(modifiers).toEqual([template, ["-3", "-3", "-2"]]);
  });

  it("should correctly get modifiers for DEX between 4 and 5", () => {
    const modifiers = getDexterityModifiers(4);

    expect(modifiers).toEqual([template, ["-2", "-2", "-1"]]);
  });

  it("should correctly get modifiers for DEX between 6 and 8", () => {
    const modifiers = getDexterityModifiers(7);

    expect(modifiers).toEqual([template, ["-1", "-1", "-1"]]);
  });

  it("should correctly get modifiers for DEX between 9 and 12", () => {
    const modifiers = getDexterityModifiers(10);

    expect(modifiers).toEqual(["", []]);
  });

  it("should correctly get modifiers for DEX between 13 and 15", () => {
    const modifiers = getDexterityModifiers(14);

    expect(modifiers).toEqual([template, ["+1", "+1", "+1"]]);
  });

  it("should correctly get modifiers for DEX between 16 and 17", () => {
    const modifiers = getDexterityModifiers(16);

    expect(modifiers).toEqual([template, ["+2", "+2", "+1"]]);
  });

  it("should correctly get modifiers for DEX equal 18", () => {
    const modifiers = getDexterityModifiers(18);

    expect(modifiers).toEqual([template, ["+3", "+3", "+2"]]);
  });
});
