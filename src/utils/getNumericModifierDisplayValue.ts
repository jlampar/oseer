/**
 * Converts the numeric modifier value to its string representation (e.g. the positive modifier gets an extra '+' prefix).
 * @param modifierValue the numberic value of a modifier.
 * @param hideZero if set to true, it renders modifier of 0 as an empty string (default is false).
 * @param suffix an optional suffix to add after the modifier, usually used to inset the percentile symbol.
 * @returns the modifier as string in a proper format with either +/- depending on the value
 */
export const getNumericModifierDisplayValue = (
  modifierValue: number,
  hideZero = false,
  suffix = "",
): string => {
  if (modifierValue === 0) {
    return hideZero ? "" : modifierValue.toString() + suffix;
  }

  return modifierValue < 0
    ? modifierValue.toString() + suffix
    : `+${modifierValue}` + suffix;
};
