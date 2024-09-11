import { Method } from "../../types";
import { bright, cyan, dim, green, indent } from "../styles";
import { runMethodPrompt } from "./runMethodPrompt";

/**
 * Runs method prompt and on submit returns the choice.
 * @param defaultMethod a method provided via command-line interface used to skip the method picker
 * @returns method prompt choice
 */
export const getMethod = async (
  defaultMethod: Method | undefined,
): Promise<Method> | never =>
  (defaultMethod ? Promise.resolve(defaultMethod) : runMethodPrompt()).then(
    (value: Method) => {
      if (defaultMethod) {
        console.log(
          `${green("✔")} ${bright("Pick a method")} ${dim("·")} ${cyan(
            defaultMethod,
          )}`,
        );
      }

      switch (value) {
        case "simple":
          console.log(indent("Roll 3d6 DTL\n", 2));
          break;
        case "race-adjusted":
          console.log(indent("Apply racial modifiers, then roll 3d6 DTL\n", 2));
          break;
        case "race-adjusted-afterwards":
          console.log(indent("Roll 3d6 DTL, then apply racial modifiers\n", 2));
          break;
        case "constrained":
          console.log(indent("Re-roll 3d6 DTL with constraints\n", 2));
          break;
        case "race-adjusted-constrained":
          console.log(
            indent(
              "Apply racial modifiers, then re-roll 3d6 DTL with constraints\n",
              2,
            ),
          );
          break;
        case "race-adjusted-afterwards-constrained":
          console.log(
            indent(
              "Re-roll 3d6 DTL with constraints, then apply racial modifiers\n",
              2,
            ),
          );
          break;
        default:
          throw new Error(`Unexisiting method: ${value}`);
      }

      return value;
    },
  );
