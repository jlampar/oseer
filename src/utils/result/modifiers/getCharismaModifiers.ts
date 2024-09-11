import { Modifier } from "../../../types";
import { cyan } from "../../styles";
import { getNumericModifierDisplayValue } from "./../../getNumericModifierDisplayValue";

/**
 * Renders Charisma modifiers for a given score value.
 * @param chaScore Charisma score numeric value.
 * @returns Charisma modifiers in a form of: `NPC Reactions`, `Retainers Max`, `Retainers Loyalty`.
 */
export const getCharismaModifiers = (chaScore: number): Modifier => {
  let npcReactions: number = 0;
  let retaintersMax: number = 0;
  let retaintersLoyalty: number = 0;

  if (chaScore === 3) {
    npcReactions = -2;
    retaintersMax = 1;
    retaintersLoyalty = 4;
  } else if (chaScore <= 5) {
    npcReactions = -1;
    retaintersMax = 2;
    retaintersLoyalty = 5;
  } else if (chaScore <= 8) {
    npcReactions = -1;
    retaintersMax = 3;
    retaintersLoyalty = 6;
  } else if (chaScore <= 12) {
    npcReactions = 0;
    retaintersMax = 4;
    retaintersLoyalty = 7;
  } else if (chaScore <= 15) {
    npcReactions = 1;
    retaintersMax = 5;
    retaintersLoyalty = 8;
  } else if (chaScore <= 17) {
    npcReactions = 1;
    retaintersMax = 6;
    retaintersLoyalty = 9;
  } else if (chaScore === 18) {
    npcReactions = 2;
    retaintersMax = 7;
    retaintersLoyalty = 10;
  }

  const npcReactionsPart = npcReactions ? `NPC Reactions: ${cyan("%s")}, ` : "";
  const inputs = [`${retaintersMax}`, `${retaintersLoyalty}`];

  if (npcReactions) {
    inputs.unshift(getNumericModifierDisplayValue(npcReactions));
  }

  return [
    `${npcReactionsPart}Retainers Max #: ${cyan(
      "%s",
    )}, Retainers Loyalty: ${cyan("%s")}`,
    inputs,
  ];
};
