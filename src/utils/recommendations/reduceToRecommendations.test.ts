import {
  Ability,
  Class,
  ClassToPrimeRequisiteModifierMap,
  RollResult,
} from "../../types";
import { reduceToRecommendations } from "./reduceToRecommendations";

describe("reduceToRecommendations", () => {
  it("should correctly reduce class-to-PrimeRequisiteModifier map, available and unavailable classes to a recommendations dictionary", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap = {
      acrobat: "10",
      assassin: "10",
      thief: "10",
      illusionist: "5",
      "magic-user": "5",
    };
    const available: Array<Class> = ["kineticist"];
    const unavailable: Array<Class> = ["ranger"];

    const reduced = reduceToRecommendations(
      classToPrimeRequisiteModifierMap,
      available,
      unavailable,
    );

    expect(
      reduced.best.includes("acrobat") &&
        reduced.best.includes("assassin") &&
        reduced.best.includes("thief"),
    ).toEqual(true);
    expect(
      reduced.good.includes("illusionist") &&
        reduced.good.includes("magic-user"),
    ).toEqual(true);
    expect(reduced.available.includes("kineticist")).toEqual(true);
    expect(reduced.unavailable.includes("ranger")).toEqual(true);
  });

  it("should correctly reduce class-to-PrimeRequisiteModifier map, available and unavailable classes to a recommendations dictionary when the map is empty", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap =
      {};
    const available: Array<Class> = ["kineticist"];
    const unavailable: Array<Class> = ["ranger"];

    const reduced = reduceToRecommendations(
      classToPrimeRequisiteModifierMap,
      available,
      unavailable,
    );

    expect(reduced.best.length).toEqual(0);
    expect(reduced.good.length).toEqual(0);
    expect(reduced.available.includes("kineticist")).toEqual(true);
    expect(reduced.unavailable.includes("ranger")).toEqual(true);
  });

  it("should correctly reduce class-to-PrimeRequisiteModifier map, available and unavailable classes to a recommendations dictionary when available classes is empty", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap = {
      acrobat: "10",
      assassin: "10",
      thief: "10",
      illusionist: "5",
      "magic-user": "5",
    };
    const available: Array<Class> = [];
    const unavailable: Array<Class> = ["ranger"];

    const reduced = reduceToRecommendations(
      classToPrimeRequisiteModifierMap,
      available,
      unavailable,
    );

    expect(
      reduced.best.includes("acrobat") &&
        reduced.best.includes("assassin") &&
        reduced.best.includes("thief"),
    ).toEqual(true);
    expect(
      reduced.good.includes("illusionist") &&
        reduced.good.includes("magic-user"),
    ).toEqual(true);
    expect(reduced.available.length).toEqual(0);
    expect(reduced.unavailable.includes("ranger")).toEqual(true);
  });

  it("should correctly reduce class-to-PrimeRequisiteModifier map, available and unavailable classes to a recommendations dictionary when unavailable classes is empty", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap = {
      acrobat: "10",
      assassin: "10",
      thief: "10",
      illusionist: "5",
      "magic-user": "5",
    };
    const available: Array<Class> = ["kineticist"];
    const unavailable: Array<Class> = [];

    const reduced = reduceToRecommendations(
      classToPrimeRequisiteModifierMap,
      available,
      unavailable,
    );

    expect(
      reduced.best.includes("acrobat") &&
        reduced.best.includes("assassin") &&
        reduced.best.includes("thief"),
    ).toEqual(true);
    expect(
      reduced.good.includes("illusionist") &&
        reduced.good.includes("magic-user"),
    ).toEqual(true);
    expect(reduced.available.includes("kineticist")).toEqual(true);
    expect(reduced.unavailable.length).toEqual(0);
  });

  it("should correctly reduce class-to-PrimeRequisiteModifier map, available and unavailable classes to a recommendations dictionary when all arguments are empty", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap =
      {};
    const available: Array<Class> = [];
    const unavailable: Array<Class> = [];

    const reduced = reduceToRecommendations(
      classToPrimeRequisiteModifierMap,
      available,
      unavailable,
    );

    expect(reduced.best.length).toEqual(0);
    expect(reduced.good.length).toEqual(0);
    expect(reduced.available.length).toEqual(0);
    expect(reduced.unavailable.length).toEqual(0);
  });
});
