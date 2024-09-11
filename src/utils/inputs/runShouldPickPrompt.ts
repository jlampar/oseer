const { Select } = require("enquirer");
import { Pick } from "../../types";

/**
 * Runs prompt for pick input.
 * @returns runned prompt for pick
 */
export const runShouldPickPrompt = async (): Promise<Pick> | never => {
  const prompt = new Select({
    name: "pick",
    message:
      "You approach a dimly lit cave where the seer dwells. What do you want from him?",
    choices: [
      {
        value: "accept",
        message: "Tell me about my fate",
      },
      {
        value: "choose",
        message:
          "My destiny is my own, show me what do you see in the strands of fate",
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in pick prompt; error: ${error}`);
  });
};
