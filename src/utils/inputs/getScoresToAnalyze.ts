import { Ability } from "../../types";
import { cyan, indent } from "../styles";
import { convertInputScoresToAnalyze } from "./convertInputScoresToAnalyze";
import { runScoresToAnalyzePrompt } from "./runScoresToAnalyzePrompt";

/**
 * Runs scores to analyze prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @returns preprocessed scores to analyze input
 */
export const getScoresToAnalyze = async (): Promise<Record<Ability, number>> =>
  runScoresToAnalyzePrompt().then((input: Record<Ability, string>) => {
    const converted = convertInputScoresToAnalyze(input);
    const choiceSummary = Object.entries(converted)
      .filter(([_, modifier]) => modifier)
      .map(
        ([ability, value]: [string, number]) =>
          `${ability} ${cyan(`${value}`)}`,
      )
      .join(", ");

    console.log(indent(`${choiceSummary}\n`, 2));

    return converted;
  });
