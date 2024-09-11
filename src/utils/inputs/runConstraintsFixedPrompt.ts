const { Form } = require("enquirer");
import { Ability } from "../../types";
import { indent } from "../styles";

/**
 * Runs prompt for constraints 'fixed' input.
 * @returns runned prompt for constraints 'fixed'
 */
export const runConstraintsFixedPrompt = async ():
  | Promise<Record<Ability, string>>
  | never => {
  const prompt = new Form({
    name: "constraints-fixed",
    message: `Input minimal scores for given abilities (0 means no constraint).\n${indent(
      "All scores will be re-rolled until the set that meets the exact requirements is found.",
      2,
    )}`,
    choices: [
      { name: "STR", message: "Strength (STR)", initial: "0" },
      { name: "DEX", message: "Dexterity (DEX)", initial: "0" },
      { name: "CON", message: "Constitution (CON)", initial: "0" },
      { name: "WIS", message: "Wisdom (WIS)", initial: "0" },
      { name: "INT", message: "Intelligence (INT)", initial: "0" },
      { name: "CHA", message: "Charisma (CHA)", initial: "0" },
    ],
  });

  return prompt.run().catch((error: string | undefined) => {
    throw new Error(`Error in constraints 'fixed' prompt; error: ${error}`);
  });
};
