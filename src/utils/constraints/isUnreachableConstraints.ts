import {
  Ability,
  Constraints,
  ConstraintsThresholded,
  ConstraintsType,
} from "../../types";
import { isUnreachableConstraintsForTypeEvery } from "./isUnreachableConstraintsForTypeEvery";
import { isUnreachableConstraintsForTypeFixedScoreBased } from "./isUnreachableConstraintsForTypeFixedScoreBased";
import { isUnreachableConstraintsForTypeRandom } from "./isUnreachableConstraintsForTypeRandom";

/**
 * Checks if the provided constraints could result in an infinite while loop.
 * @param constraints a constraints of a selected type
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @param racialRequirements a record of 6 racial requirements for every one of 6 abilities.
 * @returns whether or not the constraints are impossible to satisfy
 */
export const isUnreachableConstraints = (
  constraints: Constraints,
  constraintsType: ConstraintsType,
  racialModifiers: Record<Ability, number>,
  racialRequirements: Record<Ability, number>,
): boolean | never => {
  const isUnreachableracialRequirements: boolean =
    isUnreachableConstraintsForTypeFixedScoreBased(
      racialRequirements,
      racialModifiers,
    );

  switch (constraintsType) {
    case "fixed":
    case "class":
    case "none":
      return (
        isUnreachableConstraintsForTypeFixedScoreBased(
          constraints as Record<Ability, number>,
          racialModifiers,
        ) || isUnreachableracialRequirements
      );
    case "random":
      return (
        isUnreachableConstraintsForTypeRandom(
          constraints as ConstraintsThresholded,
          racialModifiers,
        ) || isUnreachableracialRequirements
      );
    case "every":
      return (
        isUnreachableConstraintsForTypeEvery(
          constraints as Pick<ConstraintsThresholded, "threshold">,
          racialModifiers,
        ) || isUnreachableracialRequirements
      );
    default:
      throw new Error("Unsupported constraint type");
  }
};
