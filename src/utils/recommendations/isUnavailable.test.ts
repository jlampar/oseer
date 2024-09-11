import { Ability, ClassConfigEntry, DemiHumanClass } from "../../types";
import { isUnavailable } from "./isUnavailable";

describe("isUnavailable", () => {
  it("should correctly evaluate scores as not meeting a requirement for a single score", () => {
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

    const unavailable = isUnavailable(entry, scores);

    expect(unavailable).toEqual(true);
  });

  it("should correctly evaluate scores as not meeting a requirement for a single score among multiple scores", () => {
    const entry: ClassConfigEntry<DemiHumanClass> = {
      name: "dwarf",
      requirements: { CON: 9, STR: 13 },
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

    const unavailable = isUnavailable(entry, scores);

    expect(unavailable).toEqual(true);
  });

  it("should correctly evaluate scores as meeting a requirement for a single score", () => {
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

    const unavailable = isUnavailable(entry, scores);

    expect(unavailable).toEqual(false);
  });

  it("should correctly evaluate scores as meeting a requirement for multiple scores", () => {
    const entry: ClassConfigEntry<DemiHumanClass> = {
      name: "dwarf",
      requirements: { CON: 9, STR: 9 },
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

    const unavailable = isUnavailable(entry, scores);

    expect(unavailable).toEqual(false);
  });
});
