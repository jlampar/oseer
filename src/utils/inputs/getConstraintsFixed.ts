import { Ability } from "../../types";
import { firstLetterToUppercase } from "../firstLetterToUppercase";
import { cyan, indent } from "../styles";
import { convertInputAbilityScores } from "./convertInputAbilityScores";
import { runConstraintsFixedPrompt } from "./runConstraintsFixedPrompt";

/**
 * Runs constraints 'fixed' prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @returns preprocessed constraints 'fixed' input
 */
export const getConstraintsFixed = async (): Promise<Record<Ability, number>> =>
  runConstraintsFixedPrompt().then((input: Record<Ability, string>) => {
    const converted = convertInputAbilityScores(input);
    const choiceSummary = Object.entries(converted)
      .filter(([_, modifier]) => modifier)
      .map(
        ([ability, value]: [string, number]) =>
          `minimum ${ability} ${cyan(`${value}`)}`,
      )
      .join(", ");

    console.log(
      indent(
        choiceSummary.length
          ? `${firstLetterToUppercase(choiceSummary)}\n`
          : "Nothing provided\n",
        2,
      ),
    );

    return converted;
  });
