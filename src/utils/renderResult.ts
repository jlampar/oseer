import ora, { Ora } from "ora";
import {
  Ability,
  RollResult,
  Method,
  Source,
  DemiHumanClass,
  Class,
} from "../types";
import { addRacialModifiers } from "./addRacialModifiers";
import { getRacialModifiersAndRequirements } from "./inputs";
import {
  getTitle,
  renderIntermediateResult,
  renderFinalResult,
} from "./result";
import { bright } from "./styles";
import { ZERO_VALUES } from "./const";

/**
 * Renders the intermediate or final results. For the intermediate - it asks for racial modifiers and only then displays the final results adjusted.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param pick a boolean flag telling if the class should be picked by the Oseer.
 * @param targetClass a class being targed via `class` constraint (if provided)
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 * @param racialModifiers a record of 6 racial modifiers for every one of 6 abilities (for non-racial method it's just 6 zeros).
 * @param attempts number of attempts in which a constrained roll was made to meet the requirements.
 * @param oraSpinner Ora spinner object.
 */
export const renderResult = async (
  source: Source,
  method: Method,
  pick: boolean,
  targetClass: Class | DemiHumanClass | null,
  rolledAbilityScores: Record<Ability, RollResult>,
  racialModifiers: Record<Ability, number> = { ...ZERO_VALUES },
  attempts: number = 1,
  oraSpinner?: Ora,
): Promise<void> => {
  const spinner = oraSpinner ?? ora().start();

  if (
    method === "race-adjusted-afterwards" ||
    method === "race-adjusted-afterwards-constrained"
  ) {
    spinner.succeed(`${bright(`${getTitle(attempts, method, false)}:\n`)}`);
    renderIntermediateResult(rolledAbilityScores);
    const { racialModifiers: inputtedRacialModifiers } =
      await getRacialModifiersAndRequirements(method);
    racialModifiers = inputtedRacialModifiers;
  }

  const rolledAbilityScoresAdjusted = addRacialModifiers(
    rolledAbilityScores,
    racialModifiers,
  );

  spinner.succeed(`${bright(`${getTitle(attempts, method, true)}:\n`)}`);

  renderFinalResult(
    source,
    method,
    pick,
    targetClass,
    rolledAbilityScoresAdjusted,
  );
};
