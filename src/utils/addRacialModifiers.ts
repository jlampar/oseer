import { Ability, RollResult } from "../types";

const toAdjustedScore = (
  ability: string,
  rollResult: RollResult,
  racialModifiers: Record<Ability, number>,
): RollResult => {
  const [firstRoll, secondRoll, thirdRoll, score] = rollResult;

  const adjustedValue = score + racialModifiers[ability as Ability];
  let newScore: number = adjustedValue;

  if (adjustedValue < 3) {
    newScore = 3;
  } else if (adjustedValue > 18) {
    newScore = 18;
  }

  return [firstRoll, secondRoll, thirdRoll, newScore];
};

/**
 * Raises/lowers every one of the 6 rolled Ability Scores by its proper racial ability modifier. If the operation would result in a score lower than 3 or higher than 18, it evaluates to 3 and 18 respectively. It also recalculates the PRM.
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns a record of 6 roll results for every one of 6 abilities increased by its proper modifiers
 */
export const addRacialModifiers = (
  rolledAbilityScores: Record<Ability, RollResult>,
  racialModifiers: Record<Ability, number>,
) =>
  Object.entries(rolledAbilityScores).reduce<Record<Ability, RollResult>>(
    (
      adjustedScores: Record<Ability, RollResult>,
      [ability, rollResult]: [string, RollResult],
    ) =>
      Object.assign(adjustedScores, {
        ...adjustedScores,
        [ability as Ability]: toAdjustedScore(
          ability,
          rollResult,
          racialModifiers,
        ),
      }),
    { ...rolledAbilityScores },
  );
