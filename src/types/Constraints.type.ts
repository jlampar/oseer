import { Ability } from "./Ability.type";
import { ConstraintsThresholded } from "./ConstraintsThresholded.type";

/**
 * Any possible type of a constraints that can be selected.
 */
export type Constraints =
  | Record<Ability, number>
  | ConstraintsThresholded
  | Pick<ConstraintsThresholded, "threshold">;
