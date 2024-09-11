const { Select } = require("enquirer");
import { Mode } from "../../types";

/**
 * Runs prompt for mode input.
 * @returns runned prompt for mode
 */
export const runModePrompt = async (): Promise<Mode> | never => {
  const prompt = new Select({
    name: "mode",
    message: "Pick a mode",
    choices: [
      {
        value: "roll",
        message: `Roll`,
      },
      {
        value: "analyze",
        message: `Analyze`,
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in mode prompt; error: ${error}`);
  });
};
