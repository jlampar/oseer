import {
  Ability,
  Class,
  DemiHumanClass,
  Method,
  RollResult,
  Source,
} from "../../types";
import { renderRecommendations } from "./renderRecommendations";
import { renderRow } from "./renderRow";
import { renderTableHeader } from "./renderTableHeader";

/**
 * Renders result of a roll with all the recommendations.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param pick a boolean flag telling if the class should be picked by the Oseer.
 * @param targetClass a class being targed via `class` constraint (if provided)
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 */
export const renderFinalResult = (
  source: Source,
  method: Method,
  pick: boolean,
  targetClass: Class | DemiHumanClass | null,
  rolledAbilityScores: Record<Ability, RollResult>,
) => {
  renderTableHeader();
  Object.entries(rolledAbilityScores).forEach(renderRow);
  renderRecommendations(source, method, pick, targetClass, rolledAbilityScores);
  console.log("\n");
};
