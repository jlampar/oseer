import { Ability } from "../../types";
import { qualifiesForPrimeRequisite } from "./qualifiesForPrimeRequisite";

describe("qualifiesForPrimeRequisite", () => {
  it("should correctly qualify scores as fitting for the requirement when there is one requirement", () => {
    const requirements: Array<Partial<Record<Ability, number>>> = [{ STR: 13 }];
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 12,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const qualifies = qualifiesForPrimeRequisite(requirements, scores);

    expect(qualifies).toEqual(true);
  });

  it("should correctly qualify scores as fitting for the requirement when there is one requirement with multiple scores", () => {
    const requirements: Array<Partial<Record<Ability, number>>> = [
      { STR: 13, CHA: 13 },
    ];
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 12,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const qualifies = qualifiesForPrimeRequisite(requirements, scores);

    expect(qualifies).toEqual(true);
  });

  it("should correctly qualify scores as fitting for the requirement when there are multiple requirements", () => {
    const requirements: Array<Partial<Record<Ability, number>>> = [
      { STR: 16 },
      { CON: 12 },
    ];
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 12,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const qualifies = qualifiesForPrimeRequisite(requirements, scores);

    expect(qualifies).toEqual(true);
  });

  it("should correctly qualify scores as fitting for the requirement when there are multiple requirements with multiple scores", () => {
    const requirements: Array<Partial<Record<Ability, number>>> = [
      { STR: 16, WIS: 13 },
      { CON: 12, CHA: 13 },
    ];
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 12,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const qualifies = qualifiesForPrimeRequisite(requirements, scores);

    expect(qualifies).toEqual(true);
  });

  it("should correctly disqualify scores as fitting for the requirement when it is not met", () => {
    const requirements: Array<Partial<Record<Ability, number>>> = [
      { STR: 16 },
      { CON: 16, CHA: 16 },
    ];
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 12,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    const qualifies = qualifiesForPrimeRequisite(requirements, scores);

    expect(qualifies).toEqual(false);
  });
});
