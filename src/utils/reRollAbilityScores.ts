import ora, { Ora } from "ora";
import { Method } from "./../types/Method.type";
import { Ability, Class, DemiHumanClass, RollResult, Source } from "../types";
import { renderResult } from "./renderResult";
import { rollAbilityScores } from "./rollAbilityScores";

/**
 * Checks if the current Ability Scores meet the constraints' requirements: if yes, it renders the scores, if not - it recursively calls itself to re-roll and perform next checks (the recursive calls are performed inside the `setTimeout` zero to free the main thread for the spinner animation).
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param pick a boolean flag telling if the class should be picked by the Oseer.
 * @param targetClass a class being targed via `class` constraint (if provided)
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @param constraints provided constraints.
 * @param constraintsType the type of constraints: can be random, every, fixed or class.
 * @param attempts number of attempts in which a constrained roll was made to meet the requirements.
 * @param oraSpinner Ora spinner object.
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @returns either recursively calls itself or returns the `renderResult` function if the constraints is met,
 */
export const reRollAbilityScores = <T extends Array<unknown>>(
  source: Source,
  method: Method,
  pick: boolean,
  targetClass: Class | DemiHumanClass | null,
  racialModifiers: Record<Ability, number>,
  requirementMetFuntion: (
    ...args: [Record<Ability, RollResult>, ...T]
  ) => boolean,
  requirementMetArgsRest: T,
  attempts: number = 0,
  oraSpinner: Ora = ora("Rolling...").start(),
  rolledAbilityScores: Record<Ability, RollResult> = rollAbilityScores(),
): Promise<void> | NodeJS.Timeout => {
  attempts++;
  oraSpinner.text = `Rolling; ${attempts} attempts`;

  return requirementMetFuntion(rolledAbilityScores, ...requirementMetArgsRest)
    ? renderResult(
        source,
        method,
        pick,
        targetClass,
        rolledAbilityScores,
        racialModifiers,
        attempts,
        oraSpinner,
      )
    : setTimeout(
        reRollAbilityScores,
        0,
        source,
        method,
        pick,
        targetClass,
        racialModifiers,
        requirementMetFuntion,
        requirementMetArgsRest,
        attempts++,
        oraSpinner,
      );
};
