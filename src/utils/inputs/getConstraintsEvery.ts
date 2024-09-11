import { ConstraintsThresholded } from "../../types";
import { cyan, indent } from "../styles";
import { convertInputConstraintsEvery } from "./convertInputConstraintsEvery";
import { runConstraintsEveryPrompt } from "./runConstraintsEveryPrompt";

/**
 * Runs constraints 'every' prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @returns preprocessed constraints 'every' input
 */
export const getConstraintsEvery = async (): Promise<
  Pick<ConstraintsThresholded, "threshold">
> =>
  runConstraintsEveryPrompt().then((input: Record<string, string>) => {
    const converted = convertInputConstraintsEvery(input);

    const { threshold } = converted;

    console.log(
      indent(
        threshold
          ? `If every score is ${cyan(
              String(threshold),
            )} or lower, the set is re-rolled.\n`
          : "Nothing provided\n",
        2,
      ),
    );

    return converted;
  });
