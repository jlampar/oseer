import { Ability, Class, ClassConfigEntry, DemiHumanClass } from "../../types";
import { assignToUnavailableSet } from "./assignToUnavailableSet";

describe("assignToUnavailableSet", () => {
  it("should correctly assign class to unavailable set", () => {
    const unavailable: Array<Class | DemiHumanClass> = [];
    const entry: ClassConfigEntry<DemiHumanClass> = {
      name: "dwarf",
      requirements: { CON: 9 },
      primeRequisite: {
        "5": [{ STR: 13 }],
        "10": [{ STR: 16 }],
      },
    };
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 8,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const notAllowed = assignToUnavailableSet(scores, entry, unavailable);

    expect(notAllowed).toEqual(true);
    expect(unavailable.length).toEqual(1);
    expect(unavailable[0]).toEqual("dwarf");
  });

  it("should skip on assigning class to unavailable set if it is allowed", () => {
    const unavailable: Array<Class | DemiHumanClass> = [];
    const entry: ClassConfigEntry<DemiHumanClass> = {
      name: "dwarf",
      requirements: { CON: 9 },
      primeRequisite: {
        "5": [{ STR: 13 }],
        "10": [{ STR: 16 }],
      },
    };
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 10,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const notAllowed = assignToUnavailableSet(scores, entry, unavailable);

    expect(notAllowed).toEqual(false);
    expect(unavailable.length).toEqual(0);
  });
});
