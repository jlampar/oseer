/**
 * The name of a method that can be used to roll the dice: `simple` is 3d6 down the line, `race-adjusted` is 3d6 down the line but then you apply racial modifiers prior to rolling, `constrained` is 3d6 down the line with re-rolls until a selected constraints are met (note that the whole set of all 6 Ability Scores is re-rolled, not just one Score), `race-adjusted-constrained` is 3d6 down the line with re-rolls to meet constraints and also with a prior application of the race modifiers, `race-adjusted-afterwards` is the same as `race-adjusted` but you apply racial modifiers after you roll, `race-adjusted-afterwards-constrained` is 3d6 down the line re-rolled to meet constraits with racial modifiers applied after all the re-rolls.
 */
export type Method =
  | "simple"
  | "race-adjusted"
  | "constrained"
  | "race-adjusted-constrained"
  | "race-adjusted-afterwards"
  | "race-adjusted-afterwards-constrained";
