/**
 * The type of a constraint that can be used to re-roll the results: `random` is re-rolling if at least N scores is less than M, `fixed` is choosing particular scores to be no less than a given values, `every` is setting a threshold - if every score is below or equal to it, the set is re-rolled, `class` is rolling for a particular class or demi-human class (it's a variant of `fixed` but with a recommendations config used to get min scores), `none` means no constraints (it can be selected if there are racial requirements provided and you decide to not put any more constraints than them).
 */
export type ConstraintsType = "random" | "fixed" | "every" | "class" | "none";
