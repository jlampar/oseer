import { Ability, RacialModifiersAndRequirements } from "../../types";
import { ZERO_VALUES } from "../const";
import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";

// it optionally starts with + or - sign then is made of numbers, then can have another number after the comma.
const isValidModifierWithRequirement = (value: string) =>
  /^(-|\+)?\d+((\,\d+)?)+$/.test(value);

/**
 * Reduces the inputted racial modifiers and requirements so every entry is a valid modifier. If yes, it is as it is, if no - it becomes 0. A valid modifier: (1) starts with a plus sign, minus sign or an empty string, (2) and then is 100% numeric. If there is a constraint, it will be a numeric after the comma.
 * @param input inputted racial modifiers and requirements
 * @returns converted racial modifiers and requirements
 */
export const convertInputRacialModifiersAndRequirements = (
  input: Record<Ability, string>,
): RacialModifiersAndRequirements =>
  Object.entries(input).reduce<RacialModifiersAndRequirements>(
    (
      newRaceModifiers: RacialModifiersAndRequirements,
      [ability, score]: [string, string],
    ) => {
      if (isValidModifierWithRequirement(score)) {
        const [racialModifier, racialRequirement] = score.split(",");

        newRaceModifiers.racialModifiers[ability as Ability] = +racialModifier;

        if (racialRequirement) {
          newRaceModifiers.racialRequirements[ability as Ability] =
            getNormalizedScoreConstraint(racialRequirement);
        }
      }

      return newRaceModifiers;
    },
    {
      racialModifiers: { ...ZERO_VALUES },
      racialRequirements: { ...ZERO_VALUES },
    },
  );
