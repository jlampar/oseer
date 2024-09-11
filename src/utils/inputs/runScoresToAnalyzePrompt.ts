const { Form } = require("enquirer");
import { Ability } from "../../types";

/**
 * Runs prompt for scores to analyze input.
 * @returns runned prompt for scores to analyze
 */
export const runScoresToAnalyzePrompt = async ():
  | Promise<Record<Ability, string>>
  | never => {
  const prompt = new Form({
    name: "scores-to-analyze",
    message: `Input scores for all abilities (apply all racial modifiers if necessary)`,
    choices: [
      { name: "STR", message: "Strength (STR)", initial: "3" },
      { name: "DEX", message: "Dexterity (DEX)", initial: "3" },
      { name: "CON", message: "Constitution (CON)", initial: "3" },
      { name: "WIS", message: "Wisdom (WIS)", initial: "3" },
      { name: "INT", message: "Intelligence (INT)", initial: "3" },
      { name: "CHA", message: "Charisma (CHA)", initial: "3" },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in scores to analyze prompt; error: ${error}`);
  });
};
