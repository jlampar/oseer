const { Select } = require("enquirer");
import { Ability, ConstraintsType } from "../../types";

/**
 * Runs prompt for constraint type input.
 * @param racialRequirements a record of 6 racial requirements for every one of 6 abilities.
 * @returns runned prompt for constraint type
 */
export const runConstraintTypePrompt = async (
  racialRequirements: Record<Ability, number>,
): Promise<ConstraintsType> | never => {
  const choices = [
    {
      value: "random",
      message: `At least X scores should be no less than Y`,
    },
    {
      value: "every",
      message: `Discard sets that have every score less than or equal to X`,
    },
    {
      value: "fixed",
      message: `Choosen scores should be no less than particular values`,
    },
    {
      value: "class",
      message: `Scores should be enough to have a positive PRM for a selected class`,
    },
  ];

  if (Object.values(racialRequirements).some((r) => r !== 0)) {
    choices.push({
      value: "none",
      message: `None (just racial requirements)`,
    });
  }

  const prompt = new Select({
    name: "constraints-type",
    message: "Pick a constraints type",
    choices,
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in constraint type prompt; error: ${error}`);
  });
};
