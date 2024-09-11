import { Method } from "../../types";

/**
 * Returns title of the final result or an intermediate result in the racial modifiers applied afterwards method.
 * @param attempts number of attempts in which a constrained roll was made to meet the requirements.
 * @param method the selected method of getting the final Ability Scores.
 * @param final `true`/`false` flag to indicate if the title is for the final result or for an intermediate result.
 */
export const getTitle = (
  attempts: number,
  method: Method,
  final: boolean,
): string => {
  const title = ["Rolled"];
  const racialModifiers = "Racial modifiers applied";

  if (
    method === "constrained" ||
    method === "race-adjusted-constrained" ||
    method === "race-adjusted-afterwards-constrained"
  ) {
    const attemptsDisplayValue = `${attempts} ${
      attempts === 1 ? "attempt" : "attempts"
    }`;

    title.push(attemptsDisplayValue);
  }

  if (method === "race-adjusted" || method === "race-adjusted-constrained") {
    title.push(racialModifiers.toLowerCase());
  }

  return (method === "race-adjusted-afterwards" ||
    method === "race-adjusted-afterwards-constrained") &&
    final
    ? racialModifiers
    : title.join("; ");
};
