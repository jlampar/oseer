const { Form } = require("enquirer");
import { Ability, Method } from "../../types";
import { indent } from "../styles";

/**
 * Runs prompt for racial modifiers and requirements input.
 * @param method the selected method of getting the final Ability Scores.
 * @returns runned prompt for racial modifiers and requirements
 */
export const runRacialModifiersAndRequirementsPrompt = async (
  method: Method,
): Promise<Record<Ability, string>> | never => {
  const message = `Input your racial modifiers.${
    method === "race-adjusted-constrained"
      ? indent("You can input racial requirements after a comma.", 1)
      : ""
  }`;

  const prompt = new Form({
    name: "racial-modifiers",
    message,
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
    throw new Error(
      `Error in racial modifiers and requirements prompt; error: ${error}`,
    );
  });
};
