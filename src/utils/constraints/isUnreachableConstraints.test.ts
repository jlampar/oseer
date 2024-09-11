import { Ability, ConstraintsThresholded, ConstraintsType } from "../../types";
import { isUnreachableConstraints } from "./isUnreachableConstraints";
import * as isUnreachableConstraintsForTypeFixedScoreBasedModule from "./isUnreachableConstraintsForTypeFixedScoreBased";
import * as isUnreachableConstraintsForTypeRandomModule from "./isUnreachableConstraintsForTypeRandom";
import * as isUnreachableConstraintsForTypeEveryModule from "./isUnreachableConstraintsForTypeEvery";
import { ZERO_VALUES } from "../const";

describe("isUnreachableConstraints", () => {
  const racialModifiers: Record<Ability, number> = {
    STR: 2,
    DEX: -2,
    CON: 1,
    WIS: -1,
    INT: 0,
    CHA: 0,
  };
  const constraintsFixedScoreBased: Record<Ability, number> = {
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

  it("should launch isUnreachableConstraintsForTypeFixedScoreBased when given constrainst 'fixed'/'class'", () => {
    const isUnreachableConstraintsForTypeFixedScoreBasedSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeFixedScoreBasedModule,
        "isUnreachableConstraintsForTypeFixedScoreBased",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeRandomSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeRandomModule,
        "isUnreachableConstraintsForTypeRandom",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeEverySpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeEveryModule,
        "isUnreachableConstraintsForTypeEvery",
      )
      .mockImplementation(() => false);

    isUnreachableConstraints(
      constraintsFixedScoreBased,
      "fixed",
      racialModifiers,
      ZERO_VALUES,
    );

    expect(
      isUnreachableConstraintsForTypeFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(2);
    expect(
      isUnreachableConstraintsForTypeFixedScoreBasedSpy,
    ).toHaveBeenCalledWith(constraintsFixedScoreBased, racialModifiers);
    expect(isUnreachableConstraintsForTypeRandomSpy).not.toHaveBeenCalled();
    expect(isUnreachableConstraintsForTypeEverySpy).not.toHaveBeenCalled();
  });

  it("should launch isUnreachableConstraintsForTypeRandom when given constrainst 'random'", () => {
    const isUnreachableConstraintsForTypeFixedScoreBasedSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeFixedScoreBasedModule,
        "isUnreachableConstraintsForTypeFixedScoreBased",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeRandomSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeRandomModule,
        "isUnreachableConstraintsForTypeRandom",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeEverySpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeEveryModule,
        "isUnreachableConstraintsForTypeEvery",
      )
      .mockImplementation(() => false);

    isUnreachableConstraints(
      constraintsRandom,
      "random",
      racialModifiers,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsForTypeRandomSpy).toHaveBeenCalledTimes(1);
    expect(isUnreachableConstraintsForTypeRandomSpy).toHaveBeenCalledWith(
      constraintsRandom,
      racialModifiers,
    );
    expect(
      isUnreachableConstraintsForTypeFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(1);
    expect(isUnreachableConstraintsForTypeEverySpy).not.toHaveBeenCalled();
  });

  it("should launch isUnreachableConstraintsForTypeEvery when given constrainst 'every'", () => {
    const isUnreachableConstraintsForTypeFixedScoreBasedSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeFixedScoreBasedModule,
        "isUnreachableConstraintsForTypeFixedScoreBased",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeRandomSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeRandomModule,
        "isUnreachableConstraintsForTypeRandom",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeEverySpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeEveryModule,
        "isUnreachableConstraintsForTypeEvery",
      )
      .mockImplementation(() => false);

    isUnreachableConstraints(
      constraintsEvery,
      "every",
      racialModifiers,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsForTypeEverySpy).toHaveBeenCalledTimes(1);
    expect(isUnreachableConstraintsForTypeEverySpy).toHaveBeenCalledWith(
      constraintsEvery,
      racialModifiers,
    );
    expect(
      isUnreachableConstraintsForTypeFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(1);
    expect(isUnreachableConstraintsForTypeRandomSpy).not.toHaveBeenCalled();
  });

  it("should throw an error when given unsupported constraint", () => {
    const isUnreachableConstraintsForTypeFixedScoreBasedSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeFixedScoreBasedModule,
        "isUnreachableConstraintsForTypeFixedScoreBased",
      )
      .mockImplementation(() => false);
    const isUnreachableConstraintsForTypeRandomSpy = jest
      .spyOn(
        isUnreachableConstraintsForTypeRandomModule,
        "isUnreachableConstraintsForTypeRandom",
      )
      .mockImplementation(() => false);

    expect(() => {
      isUnreachableConstraints(
        {} as Record<Ability, number> | ConstraintsThresholded,
        "lorem" as ConstraintsType,
        racialModifiers,
        ZERO_VALUES,
      );
    }).toThrow("Unsupported constraint type");
    expect(isUnreachableConstraintsForTypeRandomSpy).not.toHaveBeenCalled();
    expect(
      isUnreachableConstraintsForTypeFixedScoreBasedSpy,
    ).toHaveBeenCalledTimes(1);
  });
});
