import { getConstitutionModifiers } from "./getConstitutionModifiers";

describe("getConstitutionModifiers", () => {
  const template = "Hit Points: \x1b[36m%s\x1b[0m";

  it("should correctly get modifiers for CON equal 3", () => {
    const modifiers = getConstitutionModifiers(3);

    expect(modifiers).toEqual([template, ["-3"]]);
  });

  it("should correctly get modifiers for CON between 4 and 5", () => {
    const modifiers = getConstitutionModifiers(4);

    expect(modifiers).toEqual([template, ["-2"]]);
  });

  it("should correctly get modifiers for CON between 6 and 8", () => {
    const modifiers = getConstitutionModifiers(7);

    expect(modifiers).toEqual([template, ["-1"]]);
  });

  it("should correctly get modifiers for CON between 9 and 12", () => {
    const modifiers = getConstitutionModifiers(10);

    expect(modifiers).toEqual(["", []]);
  });

  it("should correctly get modifiers for CON between 13 and 15", () => {
    const modifiers = getConstitutionModifiers(14);

    expect(modifiers).toEqual([template, ["+1"]]);
  });

  it("should correctly get modifiers for CON between 16 and 17", () => {
    const modifiers = getConstitutionModifiers(16);

    expect(modifiers).toEqual([template, ["+2"]]);
  });

  it("should correctly get modifiers for CON equal 18", () => {
    const modifiers = getConstitutionModifiers(18);

    expect(modifiers).toEqual([template, ["+3"]]);
  });
});
