const { Select } = require("enquirer");
import { Class, ClassesConfig, DemiHumanClass } from "../../types";

/**
 * Runs prompt for constraints 'class' input.
 * @returns runned prompt for constraints 'class'
 */
export const runConstraintsClassPrompt = async (
  config: ClassesConfig<Class | DemiHumanClass>,
): Promise<Class | DemiHumanClass> | never => {
  const prompt = new Select({
    name: "mode",
    message: "Pick a class",
    choices: config.map(({ name }) => ({
      value: name,
      message: name,
    })),
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in constraints 'class' prompt; error: ${error}`);
  });
};
