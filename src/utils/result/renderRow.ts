import { Ability, RollResult } from "../../types";
import { DICES } from "../const";
import { getNumericModifierDisplayValue } from "../getNumericModifierDisplayValue";
import { cyan, indent } from "../styles";
import { getPrimeRequisiteModifier } from "./getPrimeRequisiteModifier";
import { getModifiers } from "./modifiers";

/**
 * Renders one row for one ability in a form of: `ABILITY | SCORE | DICES | PRM | MODIFIERS`.
 * @param abilityScoreEntry an entry of 1 roll result for one ability.
 */
export const renderRow = (abilityScoreEntry: [string, RollResult]) => {
  const [ability, [firstRoll, secondRoll, thirdRoll, score]] =
    abilityScoreEntry;
  const scoreDisplayValue = `${score}`;
  const prm = getNumericModifierDisplayValue(
    getPrimeRequisiteModifier(score),
    true,
    "%",
  );
  const [modifiers, input] = getModifiers(ability as Ability, score);

  const abilityColumn = indent(`${ability}:`, 2);
  const scoreColumn = indent(cyan(scoreDisplayValue), 2);
  const rollValuesColumn = indent(
    `(${DICES[firstRoll]}${DICES[secondRoll]}${DICES[thirdRoll]})`,
    3 - scoreDisplayValue.length,
  );
  const prmColumn = indent(prm, 2);
  const modifiersColumn = indent(modifiers, 6 - prm.length);

  console.log(
    `${abilityColumn}${scoreColumn}${rollValuesColumn}${prmColumn}${modifiersColumn}`,
    ...input,
  );
};
