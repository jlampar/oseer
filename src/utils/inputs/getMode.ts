import { Mode } from "../../types";
import { bright, cyan, dim, green, indent } from "../styles";
import { runModePrompt } from "./runModePrompt";

/**
 * Runs mode prompt and on submit returns the choice.
 * @param defaultMode a mode provided via command-line interface used to skip the mode picker
 * @returns mode prompt choice
 */
export const getMode = async (
  defaultMode: Mode | undefined,
): Promise<Mode> | never =>
  (defaultMode ? Promise.resolve(defaultMode) : runModePrompt()).then(
    (value: Mode) => {
      if (defaultMode) {
        console.log(
          `${green("✔")} ${bright("Pick a mode")} ${dim("·")} ${cyan(
            defaultMode,
          )}`,
        );
      }

      switch (value) {
        case "roll":
          console.log(indent("Roll\n", 2));
          break;
        case "analyze":
          console.log(indent("Analyze\n", 2));
          break;
        default:
          throw new Error(`Unexisiting mode: ${value}`);
      }

      return value;
    },
  );
