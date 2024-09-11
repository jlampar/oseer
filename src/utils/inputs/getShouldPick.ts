import { Pick } from "../../types";
import { bright, cyan, dim, green, indent } from "../styles";
import { runShouldPickPrompt } from "./runShouldPickPrompt";

/**
 * Runs should pick prompt and on submit returns it's boolean representation.
 * @param defaultShouldPick a should pick flag provided via command-line interface used to skip the should pick toggle
 * @returns the boolean representation of the should pick answer.
 */
export const getShouldPick = async (
  defaultShouldPick: boolean | undefined,
): Promise<boolean> | never =>
  (defaultShouldPick !== undefined
    ? Promise.resolve((defaultShouldPick ? "accept" : "choose") as Pick)
    : runShouldPickPrompt()
  ).then((value: Pick) => {
    if (defaultShouldPick !== undefined) {
      console.log(
        `${green("✔")} ${bright(
          "You approach a dimmly lit cave where the seer dwells. What do you want from him?",
        )} ${dim("·")} ${cyan(value)}`,
      );
    }

    switch (value) {
      case "accept":
        console.log(
          indent(
            "Good, then let me tell you what I see in the rivers of destiny!\n",
            2,
          ),
        );

        return true;
      case "choose":
        console.log(
          indent("Good, then choose by yourself and be your own doom!\n", 2),
        );

        return false;
      default:
        throw new Error(`Unexisiting should pick: ${value}`);
    }
  });
