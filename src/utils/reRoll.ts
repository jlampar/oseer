import {
  Source,
  Method,
  Ability,
  ConstraintsType,
  Constraints,
  DemiHumanClass,
  Class,
} from "../types";
import { requirementMet } from "./constraints";
import { reRollAbilityScores } from "./reRollAbilityScores";

/**
 * Wrapper method for the re-roll functions that decides if the re-rolls should happen with racial requirements in mind or not.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param pick a boolean flag telling if the class should be picked by the Oseer.
 * @param targetClass a class being targed via `class` constraint (if provided)
 * @param constraints provided constraints.
 * @param constraintsType the type of constraints: can be random, every, fixed or class.
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @param racialRequirements a record of 6 racial requirements for every one of 6 abilities.
 * @returns appropriate re-roll function
 */
export const reRoll = (
  source: Source,
  method: Method,
  pick: boolean,
  targetClass: Class | DemiHumanClass | null,
  constraints: Constraints,
  constraintsType: ConstraintsType,
  racialModifiers: Record<Ability, number>,
  racialRequirements: Record<Ability, number>,
) => {
  const racialRequirementsProvided: boolean = Object.values(
    racialRequirements,
  ).some((r) => r !== 0);
  const { basic, racial } = requirementMet();
  const commonArgsRest: [
    Constraints,
    ConstraintsType,
    Record<Ability, number>,
  ] = [constraints, constraintsType, racialModifiers];

  return racialRequirementsProvided
    ? reRollAbilityScores(
        source,
        method,
        pick,
        targetClass,
        racialModifiers,
        racial,
        [...commonArgsRest, racialRequirements],
      )
    : reRollAbilityScores(
        source,
        method,
        pick,
        targetClass,
        racialModifiers,
        basic,
        [...commonArgsRest],
      );
};
