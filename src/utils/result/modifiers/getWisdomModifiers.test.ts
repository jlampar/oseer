import { getWisdomModifiers } from "./getWisdomModifiers";

describe("getWisdomModifiers", () => {
  const template = "Magic Saves: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for WIS equal 3", () => {
    const modifiers = getWisdomModifiers(3);

    expect(modifiers).toEqual([template, ["-3"]]);
  });

  it("should correctly get modifiers for WIS between 4 and 5", () => {
    const modifiers = getWisdomModifiers(4);

    expect(modifiers).toEqual([template, ["-2"]]);
  });

  it("should correctly get modifiers for WIS between 6 and 8", () => {
    const modifiers = getWisdomModifiers(7);

    expect(modifiers).toEqual([template, ["-1"]]);
  });

  it("should correctly get modifiers for WIS between 9 and 12", () => {
    const modifiers = getWisdomModifiers(10);

    expect(modifiers).toEqual(["", []]);
  });

  it("should correctly get modifiers for WIS between 13 and 15", () => {
    const modifiers = getWisdomModifiers(14);

    expect(modifiers).toEqual([template, ["+1"]]);
  });

  it("should correctly get modifiers for WIS between 16 and 17", () => {
    const modifiers = getWisdomModifiers(16);

    expect(modifiers).toEqual([template, ["+2"]]);
  });

  it("should correctly get modifiers for WIS equal 18", () => {
    const modifiers = getWisdomModifiers(18);

    expect(modifiers).toEqual([template, ["+3"]]);
  });
});
