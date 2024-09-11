import { reRoll } from "./reRoll";
import { ZERO_VALUES } from "./const";
import { Ora } from "ora";
import {
  Source,
  Method,
  Ability,
  RollResult,
  ConstraintsThresholded,
  Class,
  DemiHumanClass,
} from "../types";

const reRollAbilityScoresMock = jest.fn();
jest.mock("./reRollAbilityScores", () => ({
  reRollAbilityScores: (
    source: Source,
    method: Method,
    pick: boolean,
    targetClass: Class | DemiHumanClass,
    racialModifiers: Record<Ability, number>,
    requirementMetFuntion: (
      ...args: [Record<Ability, RollResult>, ...Array<unknown>]
    ) => boolean,
    requirementMetArgsRest: Array<unknown>,
    attempts: number,
    oraSpinner: Ora,
    rolledAbilityScores: Record<Ability, RollResult>,
  ) =>
    reRollAbilityScoresMock(
      source,
      method,
      pick,
      targetClass,
      racialModifiers,
      requirementMetFuntion,
      requirementMetArgsRest,
      attempts,
      oraSpinner,
      rolledAbilityScores,
    ),
}));

describe("reRoll", () => {
  const constraints: Pick<ConstraintsThresholded, "threshold"> = {
    threshold: 8,
  };
  const constraintsType = "every";
  const racialModifiers = ZERO_VALUES;
  const racialRequirements = { ...ZERO_VALUES, CHA: 13 };
  it("should run reRollAbilityScores with basic if no racial requirements provided", () => {
    reRoll(
      "classic",
      "simple",
      false,
      null,
      constraints,
      constraintsType,
      racialModifiers,
      ZERO_VALUES,
    );

    expect(reRollAbilityScoresMock).toHaveBeenCalledWith(
      "classic",
      "simple",
      false,
      null,
      racialModifiers,
      expect.objectContaining({
        name: "basic",
      }),
      [constraints, constraintsType, racialModifiers],
      undefined,
      undefined,
      undefined,
    );
  });

  it("should run reRollAbilityScores with basic if no racial requirements provided", () => {
    reRoll(
      "classic",
      "simple",
      false,
      null,
      constraints,
      constraintsType,
      racialModifiers,
      racialRequirements,
    );

    expect(reRollAbilityScoresMock).toHaveBeenCalledWith(
      "classic",
      "simple",
      false,
      null,
      racialModifiers,
      expect.objectContaining({
        name: "racial",
      }),
      [constraints, constraintsType, racialModifiers, racialRequirements],
      undefined,
      undefined,
      undefined,
    );
  });
});
