import { Ability } from "./Ability.type";

/**
 * Racial modifiers and requirement, packed together in an object.
 */
export type RacialModifiersAndRequirements = {
  racialModifiers: Record<Ability, number>;
  racialRequirements: Record<Ability, number>;
};
