import { Ability, ConstraintsType } from "../../types";
import { bright, cyan, dim, green, indent, red } from "../styles";
import { runConstraintTypePrompt } from "./runConstraintTypePrompt";

/**
 * Runs constraints type prompt and on submit displays the choice, then returns the input.
 * @param defaultConstraintsType a constraints type provided via command-line interface used to skip the constraints type picker
 * @param racialRequirements a record of 6 racial requirements for every one of 6 abilities.
 * @returns constraints type input
 */
export const getConstraintsType = async (
  defaultConstraintsType: ConstraintsType | undefined,
  racialRequirements: Record<Ability, number>,
): Promise<ConstraintsType> | never =>
  (defaultConstraintsType
    ? Promise.resolve(defaultConstraintsType)
    : runConstraintTypePrompt(racialRequirements)
  ).then((input: ConstraintsType) => {
    if (defaultConstraintsType) {
      console.log(
        `${green("✔")} ${bright("Pick a constraints type")} ${dim("·")} ${cyan(
          defaultConstraintsType,
        )}`,
      );
    }

    switch (input) {
      case "random":
        console.log(indent("At least X scores should be no less than Y\n", 2));
        break;
      case "every":
        console.log(
          indent(
            "Discard sets that have every score less than or equal to X\n",
            2,
          ),
        );
        break;
      case "fixed":
        console.log(
          indent(
            "Selected scores should be no less than the given target values\n",
            2,
          ),
        );
        break;
      case "class":
        console.log(
          indent(
            "Scores should be enough to have a positive PRM for a selected class\n",
            2,
          ),
        );
        break;
      case "none":
        console.log(indent("None (just racial requirements)\n", 2));
        break;
      default:
        throw new Error(`Unexisiting constraint type: ${input}`);
    }

    if (input !== "class" && input !== "none") {
      console.log(
        indent(
          red(
            "Please remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n",
          ),
          2,
        ),
      );
    }

    return input;
  });
