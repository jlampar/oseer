const { Select } = require("enquirer");
import { Source } from "../../types";

/**
 * Runs prompt for source input.
 * @returns runned prompt for source
 */
export const runSourcePrompt = async (): Promise<Source> | never => {
  const prompt = new Select({
    name: "source",
    message: "Pick a source",
    choices: [
      {
        value: "classic",
        message: "Classic Fantasy",
      },
      {
        value: "advanced",
        message: "Advanced Fantasy",
      },
      {
        value: "advanced-with-carcass-crawler",
        message: "Advanced Fantasy + Carcass Crawler",
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in source prompt; error: ${error}`);
  });
};
