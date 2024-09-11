import { getIntelligenceModifiers } from "./getIntelligenceModifiers";

describe("getIntelligenceModifiers", () => {
  const template =
    "Spoken Languages: \x1b[36mNative%s\x1b[0m, Literacy: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for INT equal 3", () => {
    const modifiers = getIntelligenceModifiers(3);

    expect(modifiers).toEqual([template, [" (broken speech)", "Illiterate"]]);
  });

  it("should correctly get modifiers for INT between 4 and 5", () => {
    const modifiers = getIntelligenceModifiers(4);

    expect(modifiers).toEqual([template, ["", "Illiterate"]]);
  });

  it("should correctly get modifiers for INT between 6 and 8", () => {
    const modifiers = getIntelligenceModifiers(7);

    expect(modifiers).toEqual([template, ["", "Basic"]]);
  });

  it("should correctly get modifiers for INT between 9 and 12", () => {
    const modifiers = getIntelligenceModifiers(10);

    expect(modifiers).toEqual([template, ["", "Literate"]]);
  });

  it("should correctly get modifiers for INT between 13 and 15", () => {
    const modifiers = getIntelligenceModifiers(14);

    expect(modifiers).toEqual([template, [" + 1 additional", "Literate"]]);
  });

  it("should correctly get modifiers for INT between 16 and 17", () => {
    const modifiers = getIntelligenceModifiers(16);

    expect(modifiers).toEqual([template, [" + 2 additional", "Literate"]]);
  });

  it("should correctly get modifiers for INT equal 18", () => {
    const modifiers = getIntelligenceModifiers(18);

    expect(modifiers).toEqual([template, [" + 3 additional", "Literate"]]);
  });
});
