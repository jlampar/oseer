import { Ability, RollResult } from "../../types";
import { renderRow } from "./renderRow";
import { renderTableHeader } from "./renderTableHeader";

/**
 * Renders intermediate result of a roll without the recommendations. It is used in the racial modifiers applied afterwards method.
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 */
export const renderIntermediateResult = (
  rolledAbilityScores: Record<Ability, RollResult>,
) => {
  renderTableHeader();
  Object.entries(rolledAbilityScores).forEach(renderRow);
  console.log("\n");
};
