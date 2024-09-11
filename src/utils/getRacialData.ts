import { Method, Ability } from "../types";
import { ZERO_VALUES } from "./const";
import { getRacialModifiersAndRequirements } from "./inputs";

/**
 * Either asks for racial modifiers and requirements or returns the null ones for non-racial method.
 * @param method the selected method of getting the final Ability Scores.
 * @returns racial modifiers and requirements
 */
export const getRacialData = async (
  method: Method,
): Promise<
  Record<"racialModifiers" | "racialRequirements", Record<Ability, number>>
> =>
  method === "race-adjusted-constrained" || method === "race-adjusted"
    ? getRacialModifiersAndRequirements(method)
    : Promise.resolve({
        racialModifiers: { ...ZERO_VALUES },
        racialRequirements: { ...ZERO_VALUES },
      });
