import {
  Ability,
  ClassConfigEntry,
  ClassToPrimeRequisiteModifierMap,
  DemiHumanClass,
} from "../../types";
import { assignToPrimeRequisiteMap } from "./assignToPrimeRequisiteMap";

describe("assignToPrimeRequisiteMap", () => {
  it("should correctly assign class to prime requisite set", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap =
      {};
    const name: DemiHumanClass = "dwarf";
    const scores: Record<Ability, number> = {
      STR: 13,
      DEX: 8,
      CON: 10,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    assignToPrimeRequisiteMap(
      ["5", [{ STR: 13 }]],
      scores,
      name,
      classToPrimeRequisiteModifierMap,
    );

    expect(classToPrimeRequisiteModifierMap[name]).toEqual("5");
  });

  it("should skip assigning class to prime requisite set if it is already assigned for higher value modifier", () => {
    const classToPrimeRequisiteModifierMap: ClassToPrimeRequisiteModifierMap = {
      dwarf: "10",
    };
    const name: DemiHumanClass = "dwarf";
    const scores: Record<Ability, number> = {
      STR: 17,
      DEX: 8,
      CON: 10,
      WIS: 18,
      INT: 10,
      CHA: 14,
    };

    assignToPrimeRequisiteMap(
      ["5", [{ STR: 13 }]],
      scores,
      name,
      classToPrimeRequisiteModifierMap,
    );

    expect(classToPrimeRequisiteModifierMap[name]).toEqual("10");
  });
});
