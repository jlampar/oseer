import { Source } from "../../types";
import { bright, cyan, dim, green, indent } from "../styles";
import { runSourcePrompt } from "./runSourcePrompt";

/**
 * Runs source prompt and on submit returns it.
 * @param defaultSource a source provided via command-line interface used to skip the source picker
 * @returns the selected source.
 */
export const getSource = async (
  defaultSource: Source | undefined,
): Promise<Source> | never =>
  (defaultSource ? Promise.resolve(defaultSource) : runSourcePrompt()).then(
    (value: Source) => {
      if (defaultSource) {
        console.log(
          `${green("✔")} ${bright("Pick a source")} ${dim("·")} ${cyan(
            defaultSource,
          )}`,
        );
      }

      switch (value) {
        case "classic":
          console.log(indent("Classic Fantasy\n", 2));

          break;
        case "advanced":
          console.log(indent("Advanced Fantasy\n", 2));

          break;
        case "advanced-with-carcass-crawler":
          console.log(indent("Advanced Fantasy + Carcass Crawler\n", 2));

          break;
        default:
          throw new Error(`Unexisiting source: ${value}`);
      }

      return value;
    },
  );
