const { Form } = require("enquirer");

/**
 * Runs prompt for constraints 'every' input.
 * @returns runned prompt for constraints 'every'
 */
export const runConstraintsEveryPrompt = async ():
  | Promise<Record<string, string>>
  | never => {
  const prompt = new Form({
    name: "constraintsEvery",
    message: `Input a threshold. If all scores are less or equal to it, the set will be re-rolled.`,
    choices: [
      {
        name: "threshold",
        message: "Treshold",
        initial: "0",
      },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in constraints 'every' prompt; error: ${error}`);
  });
};
