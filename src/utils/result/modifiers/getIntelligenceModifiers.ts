import { Modifier } from "../../../types";
import { cyan } from "../../styles";

/**
 * Renders Intelligence modifiers for a given score value.
 * @param intScore Intelligence score numeric value.
 * @returns Intelligence modifiers in a form of: `Spoken Languages`, `Literacy`.
 */
export const getIntelligenceModifiers = (intScore: number): Modifier => {
  let spokenLanguagesSuffix: string = "";
  let literacy: string = "Basic";

  if (intScore === 3) {
    spokenLanguagesSuffix = " (broken speech)";
    literacy = "Illiterate";
  } else if (intScore <= 5) {
    literacy = "Illiterate";
  } else if (intScore <= 8) {
    literacy = "Basic";
  } else if (intScore <= 12) {
    spokenLanguagesSuffix = "";
    literacy = "Literate";
  } else if (intScore <= 15) {
    spokenLanguagesSuffix = " + 1 additional";
    literacy = "Literate";
  } else if (intScore <= 17) {
    spokenLanguagesSuffix = " + 2 additional";
    literacy = "Literate";
  } else if (intScore === 18) {
    spokenLanguagesSuffix = " + 3 additional";
    literacy = "Literate";
  }

  return [
    `Spoken Languages: ${cyan("Native%s")}, Literacy: ${cyan("%s")}`,
    [`${spokenLanguagesSuffix}`, `${literacy}`],
  ];
};
