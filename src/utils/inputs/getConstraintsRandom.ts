import { ConstraintsThresholded } from "../../types";
import { cyan, indent } from "../styles";
import { convertInputConstraintsRandom } from "./convertInputConstraintsRandom";
import { runConstraintsRandomPrompt } from "./runConstraintsRandomPrompt";

/**
 * Runs constraints 'random' prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @returns preprocessed constraints 'random' input
 */
export const getConstraintsRandom = async (): Promise<ConstraintsThresholded> =>
  runConstraintsRandomPrompt().then((input: Record<string, string>) => {
    const converted = convertInputConstraintsRandom(input);

    const { numberOfScores, threshold } = converted;

    console.log(
      indent(
        numberOfScores && threshold
          ? `At least ${cyan(String(numberOfScores))} ${
              numberOfScores > 1 ? "scores" : "score"
            } must be no less than ${cyan(String(threshold))}\n`
          : "Nothing provided\n",
        2,
      ),
    );

    return converted;
  });
