import { Ability, Method, RacialModifiersAndRequirements } from "../../types";
import { isUnreachableConstraintsForTypeFixedScoreBased } from "../constraints";
import { firstLetterToUppercase } from "../firstLetterToUppercase";
import { getNumericModifierDisplayValue } from "../getNumericModifierDisplayValue";
import { cyan, indent } from "../styles";
import { convertInputRacialModifiersAndRequirements } from "./convertInputRacialModifiersAndRequirements";
import { runRacialModifiersAndRequirementsPrompt } from "./runRacialModifiersAndRequirementsPrompt";

const getModifiersSummary = (racialModifiers: Record<Ability, number>) =>
  Object.entries(racialModifiers)
    .filter(([_, modifier]) => modifier)
    .map(
      ([ability, modifier]: [string, number]) =>
        `${ability}: ${cyan(getNumericModifierDisplayValue(modifier))}`,
    )
    .join(", ");

const getRequirementsSummary = (racialRequirements: Record<Ability, number>) =>
  Object.entries(racialRequirements)
    .filter(([_, constraint]) => constraint)
    .map(
      ([ability, requirement]: [string, number]) =>
        `minimum ${ability} ${cyan(`${requirement}`)}`,
    )
    .join(", ");

/**
 * Runs racial modifiers and requirements prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @param method the selected method of getting the final Ability Scores.
 * @returns preprocessed racial modifiers and requirements input
 */
export const getRacialModifiersAndRequirements = async (
  method: Method,
): Promise<RacialModifiersAndRequirements> =>
  runRacialModifiersAndRequirementsPrompt(method).then(
    (input: Record<Ability, string>) => {
      const { racialModifiers, racialRequirements } =
        convertInputRacialModifiersAndRequirements(input);

      if (
        !isUnreachableConstraintsForTypeFixedScoreBased(
          racialRequirements,
          racialModifiers,
        )
      ) {
        const modifiersSummary = getModifiersSummary(racialModifiers);
        const racialRequirementsSummary =
          getRequirementsSummary(racialRequirements);

        const racialRequirementsRelevant =
          method === "race-adjusted-constrained" &&
          racialRequirementsSummary.length;

        const summarySuffix = racialRequirementsRelevant ? "" : "\n";

        console.log(
          indent(
            modifiersSummary
              ? `${modifiersSummary}${summarySuffix}`
              : `No modifiers provided${summarySuffix}`,
            2,
          ),
        );
        if (racialRequirementsRelevant) {
          console.log(
            `${indent(firstLetterToUppercase(racialRequirementsSummary), 2)}\n`,
          );
        }

        return { racialModifiers, racialRequirements };
      }

      return getRacialModifiersAndRequirements(method);
    },
  );
