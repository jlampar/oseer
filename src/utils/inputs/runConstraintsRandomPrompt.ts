const { Form } = require("enquirer");
import { indent } from "../styles";

/**
 * Runs prompt for constraints 'random' input.
 * @returns runned prompt for constraints 'random'
 */
export const runConstraintsRandomPrompt = async ():
  | Promise<Record<string, string>>
  | never => {
  const prompt = new Form({
    name: "constraints-random",
    message: `Input how many (randomly determined) scores should be no less than a given threshold.\n${indent(
      "All scores will be re-rolled until the set that meets the requirements is found.",
      2,
    )}`,
    choices: [
      { name: "numberOfScores", message: "Scores", initial: "0" },
      {
        name: "threshold",
        message: "Treshold",
        initial: "0",
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in constraints 'random' prompt; error: ${error}`);
  });
};
