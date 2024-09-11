import {
  Ability,
  ConstraintsThresholded,
  ConstraintsType,
  RollResult,
} from "../../types";
import { requirementMet } from "./requirementMet";
import * as requirementMetForConstraintsFixedScoreBasedModule from "./requirementMetForConstraintsFixedScoreBased";
import * as requirementMetForConstraintsRandomModule from "./requirementMetForConstraintsRandom";
import * as requirementMetForConstraintsEveryModule from "./requirementMetForConstraintsEvery";
import { ZERO_VALUES } from "../const";

describe("requirementMet", () => {
  const rolledAbilityScores: Record<Ability, RollResult> = {
    STR: [0, 0, 0, 13],
    DEX: [0, 0, 0, 10],
    CON: [0, 0, 0, 11],
    WIS: [0, 0, 0, 15],
    INT: [0, 0, 0, 10],
    CHA: [0, 0, 0, 16],
  };
  const racialModifiers: Record<Ability, number> = {
    STR: 2,
    DEX: -2,
    CON: 1,
    WIS: -1,
    INT: 0,
    CHA: 0,
  };
  const constraintsFixed: Record<Ability, number> = {
    STR: 0,
    DEX: 10,
    CON: 13,
    WIS: 0,
    INT: 0,
    CHA: 16,
  };
  const constraintsRandom: ConstraintsThresholded = {
    numberOfScores: 2,
    threshold: 10,
  };
  const constraintsEvery: Pick<ConstraintsThresholded, "threshold"> = {
    threshold: 10,
  };

  it("should launch requirementMetForConstraintsFixedScoreBased when given constrainst 'fixed'", () => {
    const requirementMetForConstraintsFixedScoreBasedSpy = jest
      .spyOn(
        requirementMetForConstraintsFixedScoreBasedModule,
        "requirementMetForConstraintsFixedScoreBased",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsRandomSpy = jest
      .spyOn(
        requirementMetForConstraintsRandomModule,
        "requirementMetForConstraintsRandom",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsEverySpy = jest
      .spyOn(
        requirementMetForConstraintsEveryModule,
        "requirementMetForConstraintsEvery",
      )
      .mockImplementation(() => true);

    requirementMet().basic(
      rolledAbilityScores,
      constraintsFixed,
      "fixed",
      racialModifiers,
    );

    expect(
      requirementMetForConstraintsFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(1);
    expect(requirementMetForConstraintsFixedScoreBasedSpy).toHaveBeenCalledWith(
      rolledAbilityScores,
      constraintsFixed,
      racialModifiers,
    );
    expect(requirementMetForConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(requirementMetForConstraintsEverySpy).not.toHaveBeenCalled();
  });

  it("should launch requirementMetForConstraintsRandom when given constrainst 'random'", () => {
    const requirementMetForConstraintsFixedScoreBasedSpy = jest
      .spyOn(
        requirementMetForConstraintsFixedScoreBasedModule,
        "requirementMetForConstraintsFixedScoreBased",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsRandomSpy = jest
      .spyOn(
        requirementMetForConstraintsRandomModule,
        "requirementMetForConstraintsRandom",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsEverySpy = jest
      .spyOn(
        requirementMetForConstraintsEveryModule,
        "requirementMetForConstraintsEvery",
      )
      .mockImplementation(() => true);

    requirementMet().basic(
      rolledAbilityScores,
      constraintsRandom,
      "random",
      racialModifiers,
    );

    expect(requirementMetForConstraintsRandomSpy).toHaveBeenCalledTimes(1);
    expect(requirementMetForConstraintsRandomSpy).toHaveBeenCalledWith(
      rolledAbilityScores,
      constraintsRandom,
      racialModifiers,
    );
    expect(
      requirementMetForConstraintsFixedScoreBasedSpy,
    ).not.toHaveBeenCalled();
    expect(requirementMetForConstraintsEverySpy).not.toHaveBeenCalled();
  });

  it("should launch requirementMetForConstraintsEvery when given constrainst 'every'", () => {
    const requirementMetForConstraintsFixedScoreBasedSpy = jest
      .spyOn(
        requirementMetForConstraintsFixedScoreBasedModule,
        "requirementMetForConstraintsFixedScoreBased",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsRandomSpy = jest
      .spyOn(
        requirementMetForConstraintsRandomModule,
        "requirementMetForConstraintsRandom",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsEverySpy = jest
      .spyOn(
        requirementMetForConstraintsEveryModule,
        "requirementMetForConstraintsEvery",
      )
      .mockImplementation(() => true);

    requirementMet().basic(
      rolledAbilityScores,
      constraintsEvery,
      "every",
      racialModifiers,
    );

    expect(requirementMetForConstraintsEverySpy).toHaveBeenCalledTimes(1);
    expect(requirementMetForConstraintsEverySpy).toHaveBeenCalledWith(
      rolledAbilityScores,
      constraintsEvery,
      racialModifiers,
    );
    expect(
      requirementMetForConstraintsFixedScoreBasedSpy,
    ).not.toHaveBeenCalled();
    expect(requirementMetForConstraintsRandomSpy).not.toHaveBeenCalled();
  });

  it("should launch appropriate function but also the requirementMetForConstraintsFixedScoreBased when the subtype is racial", () => {
    const requirementMetForConstraintsFixedScoreBasedSpy = jest
      .spyOn(
        requirementMetForConstraintsFixedScoreBasedModule,
        "requirementMetForConstraintsFixedScoreBased",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsRandomSpy = jest
      .spyOn(
        requirementMetForConstraintsRandomModule,
        "requirementMetForConstraintsRandom",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsEverySpy = jest
      .spyOn(
        requirementMetForConstraintsEveryModule,
        "requirementMetForConstraintsEvery",
      )
      .mockImplementation(() => true);

    requirementMet().racial(
      rolledAbilityScores,
      constraintsEvery,
      "every",
      racialModifiers,
      ZERO_VALUES,
    );

    expect(requirementMetForConstraintsEverySpy).toHaveBeenCalledTimes(1);
    expect(requirementMetForConstraintsEverySpy).toHaveBeenCalledWith(
      rolledAbilityScores,
      constraintsEvery,
      racialModifiers,
    );
    expect(
      requirementMetForConstraintsFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(1);
    expect(requirementMetForConstraintsRandomSpy).not.toHaveBeenCalled();
  });

  it("should throw an error when given unsupported constraint", () => {
    const requirementMetForConstraintsFixedScoreBasedSpy = jest
      .spyOn(
        requirementMetForConstraintsFixedScoreBasedModule,
        "requirementMetForConstraintsFixedScoreBased",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsRandomSpy = jest
      .spyOn(
        requirementMetForConstraintsRandomModule,
        "requirementMetForConstraintsRandom",
      )
      .mockImplementation(() => true);
    const requirementMetForConstraintsEverySpy = jest
      .spyOn(
        requirementMetForConstraintsEveryModule,
        "requirementMetForConstraintsEvery",
      )
      .mockImplementation(() => true);

    expect(() => {
      requirementMet().basic(
        rolledAbilityScores,
        {} as Record<Ability, number> | ConstraintsThresholded,
        "lorem" as ConstraintsType,
        racialModifiers,
      );
    }).toThrow("Unsupported constraint type");
    expect(requirementMetForConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(
      requirementMetForConstraintsFixedScoreBasedSpy,
    ).not.toHaveBeenCalled();
    expect(requirementMetForConstraintsEverySpy).not.toHaveBeenCalled();
  });
});
