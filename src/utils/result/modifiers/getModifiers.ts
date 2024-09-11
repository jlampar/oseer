import { Ability, Modifier } from "../../../types";
import { getCharismaModifiers } from "./getCharismaModifiers";
import { getConstitutionModifiers } from "./getConstitutionModifiers";
import { getDexterityModifiers } from "./getDexterityModifiers";
import { getIntelligenceModifiers } from "./getIntelligenceModifiers";
import { getStrengthModifiers } from "./getStrengthModifiers";
import { getWisdomModifiers } from "./getWisdomModifiers";

/**
 * Returns the Modifiers for a given Ability Score.
 * @param ability the Ability name.
 * @param score the Ability Score numeric value.
 * @returns appropriate Modifiers for a given Ability, according to it's Score.
 */
export const getModifiers = (ability: Ability, score: number): Modifier => {
  switch (ability) {
    case "STR":
      return getStrengthModifiers(score);
    case "DEX":
      return getDexterityModifiers(score);
    case "CON":
      return getConstitutionModifiers(score);
    case "WIS":
      return getWisdomModifiers(score);
    case "INT":
      return getIntelligenceModifiers(score);
    case "CHA":
      return getCharismaModifiers(score);
    default:
      return ["", []];
  }
};
