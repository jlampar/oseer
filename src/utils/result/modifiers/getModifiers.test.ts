import { getModifiers } from "./getModifiers";

describe("getModifiers", () => {
  it("should correctly return STR modifiers for ability being the STR and a given score value", () => {
    const modifiers = getModifiers("STR", 3);

    expect(modifiers).toEqual([
      "Melee: \x1b[36m%s\x1b[0m, Open Doors: \x1b[36m%s\x1b[0m",
      ["-3", "1-in-6"],
    ]);
  });

  it("should correctly return DEX modifiers for ability being the DEX and a given score value", () => {
    const modifiers = getModifiers("DEX", 4);

    expect(modifiers).toEqual([
      "AC: \x1b[36m%s\x1b[0m, Missile: \x1b[36m%s\x1b[0m, Initiative: \x1b[36m%s\x1b[0m",
      ["-2", "-2", "-1"],
    ]);
  });

  it("should correctly return CON modifiers for ability being the CON and a given score value8", () => {
    const modifiers = getModifiers("CON", 7);

    expect(modifiers).toEqual(["Hit Points: \x1b[36m%s\x1b[0m", ["-1"]]);
  });

  it("should correctly return WIS modifiers for ability being the WIS and a given score value", () => {
    const modifiers = getModifiers("WIS", 10);

    expect(modifiers).toEqual(["", []]);
  });

  it("should correctly return INT modifiers for ability being the INT and a given score value", () => {
    const modifiers = getModifiers("INT", 14);

    expect(modifiers).toEqual([
      "Spoken Languages: \x1b[36mNative%s\x1b[0m, Literacy: \x1b[36m%s\x1b[0m",
      [" + 1 additional", "Literate"],
    ]);
  });

  it("should correctly return CHA modifiers for ability being the CHA and a given score value", () => {
    const modifiers = getModifiers("CHA", 16);

    expect(modifiers).toEqual([
      "NPC Reactions: \x1b[36m%s\x1b[0m, Retainers Max #: \x1b[36m%s\x1b[0m, Retainers Loyalty: \x1b[36m%s\x1b[0m",
      ["+1", "6", "9"],
    ]);
  });
});
