const { Select } = require("enquirer");
import { Method } from "../../types";

/**
 * Runs prompt for rolling method input.
 * @returns runned prompt for rolling method
 */
export const runMethodPrompt = async (): Promise<Method> | never => {
  const prompt = new Select({
    name: "method",
    message: "Pick a method",
    choices: [
      {
        value: "simple",
        message: `Roll 3d6 DTL`,
      },
      {
        value: "race-adjusted",
        message: `Apply racial modifiers, then roll 3d6 DTL`,
      },
      {
        value: "race-adjusted-afterwards",
        message: `Roll 3d6 DTL, then apply racial modifiers`,
      },
      {
        value: "constrained",
        message: `Re-roll 3d6 DTL with constraints`,
      },
      {
        value: "race-adjusted-constrained",
        message: `Apply racial modifiers, then re-roll 3d6 DTL with constraints`,
      },
      {
        value: "race-adjusted-afterwards-constrained",
        message: `Re-roll 3d6 DTL with constraints, then apply racial modifiers`,
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in method prompt; error: ${error}`);
  });
};
