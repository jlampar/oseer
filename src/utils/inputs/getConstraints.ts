import {
  Ability,
  Class,
  Constraints,
  ConstraintsType,
  DemiHumanClass,
  Method,
  Source,
} from "../../types";
import { ZERO_VALUES } from "../const";
import { isUnreachableConstraints } from "../constraints";
import { getConstraintsClass } from "./getConstraintsClass";
import { getConstraintsEvery } from "./getConstraintsEvery";
import { getConstraintsFixed } from "./getConstraintsFixed";
import { getConstraintsRandom } from "./getConstraintsRandom";

/**
 * Returns the constraints input form based on the selected constraints type. If the selected constraints are impossible to satisfy, it returns constraints input form again. If the constraint type is `class`, it'll return the targeted class too.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param constraintsType the type of constraints: can be `random`, `every`, `fixed` or `class`.
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @param racialRequirements a record of 6 racial requirements for every one of 6 abilities.
 * @returns runned constraints input form that will return the constraints in their final shape
 */
export const getConstraints = async (
  source: Source,
  method: Method,
  constraintsType: ConstraintsType,
  racialModifiers: Record<Ability, number>,
  racialRequirements: Record<Ability, number>,
): Promise<[Constraints, Class | DemiHumanClass | null]> | never => {
  const assignConstraints = async (
    constraintsType: ConstraintsType,
  ): Promise<[Constraints, Class | DemiHumanClass | null]> => {
    switch (constraintsType) {
      case "random":
        return Promise.resolve([await getConstraintsRandom(), null]);
      case "every":
        return Promise.resolve([await getConstraintsEvery(), null]);
      case "fixed":
        return Promise.resolve([await getConstraintsFixed(), null]);
      case "class":
        return getConstraintsClass(source, method);
      case "none":
        return Promise.resolve([{ ...ZERO_VALUES }, null]);
      default:
        throw new Error("Unsupported constraints type");
    }
  };

  const [constraints, targetClass] = await assignConstraints(constraintsType);

  return !isUnreachableConstraints(
    constraints,
    constraintsType,
    racialModifiers,
    racialRequirements,
  )
    ? Promise.resolve([constraints, targetClass])
    : getConstraints(
        source,
        method,
        constraintsType,
        racialModifiers,
        racialRequirements,
      );
};
