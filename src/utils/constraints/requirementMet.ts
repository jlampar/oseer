import {
  Ability,
  Constraints,
  ConstraintsThresholded,
  ConstraintsType,
  RollResult,
} from "../../types";
import { requirementMetForConstraintsEvery } from "./requirementMetForConstraintsEvery";
import { requirementMetForConstraintsFixedScoreBased } from "./requirementMetForConstraintsFixedScoreBased";
import { requirementMetForConstraintsRandom } from "./requirementMetForConstraintsRandom";

/**
 * Checks if scores with racial modifiers on top of them satisfy the selected constraints (therefore stoping re-rolls).
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param constraints a constraints of a selected type
 * @param constraintsType the type of constraints: can be `random`, `every`, `fixed` or `class`.
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @returns whether or not the constraints are satisfied
 */
export const requirementMet = (): {
  basic: (
    rolledAbilityScores: Record<Ability, RollResult>,
    constraints: Constraints,
    constraintsType: ConstraintsType,
    racialModifiers: Record<Ability, number>,
  ) => boolean | never;
  racial: (
    rolledAbilityScores: Record<Ability, RollResult>,
    constraints: Constraints,
    constraintsType: ConstraintsType,
    racialModifiers: Record<Ability, number>,
    racialRequirements: Record<Ability, number>,
  ) => boolean | never;
} => {
  const basic = (
    rolledAbilityScores: Record<Ability, RollResult>,
    constraints: Constraints,
    constraintsType: ConstraintsType,
    racialModifiers: Record<Ability, number>,
  ): boolean | never => {
    switch (constraintsType) {
      case "fixed":
      case "class":
      case "none":
        return requirementMetForConstraintsFixedScoreBased(
          rolledAbilityScores,
          constraints as Record<Ability, number>,
          racialModifiers,
        );
      case "random":
        return requirementMetForConstraintsRandom(
          rolledAbilityScores,
          constraints as ConstraintsThresholded,
          racialModifiers,
        );
      case "every":
        return requirementMetForConstraintsEvery(
          rolledAbilityScores,
          constraints as Pick<ConstraintsThresholded, "threshold">,
          racialModifiers,
        );
      default:
        throw new Error("Unsupported constraint type");
    }
  };

  const racial = (
    rolledAbilityScores: Record<Ability, RollResult>,
    constraints: Constraints,
    constraintsType: ConstraintsType,
    racialModifiers: Record<Ability, number>,
    racialRequirements: Record<Ability, number>,
  ): boolean | never => {
    return (
      basic(
        rolledAbilityScores,
        constraints,
        constraintsType,
        racialModifiers,
      ) &&
      requirementMetForConstraintsFixedScoreBased(
        rolledAbilityScores,
        racialRequirements,
        racialModifiers,
      )
    );
  };

  return {
    basic,
    racial,
  };
};
