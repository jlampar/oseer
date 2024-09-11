import yargs from "yargs/yargs";
import { hideBin } from "yargs/helpers";
import { underscore, cyan, red } from "../styles";
import { Argv } from "../../types";

const check = (argv: Argv): boolean | never => {
  if (
    argv["constraints-type"] === "none" &&
    argv.method !== undefined &&
    argv.method !== "race-adjusted-constrained"
  ) {
    throw new Error(
      red(
        "'None' constraints type works only if you apply racial modifiers before the roll and the method is constrained",
      ),
    );
  }

  return true;
};

const epilogue = `Method shortcuts:
  - ${cyan("simple")} = ${underscore("Roll 3d6 DTL")}
  - ${cyan("race-adjusted")} = ${underscore(
    "Apply racial modifiers, then roll 3d6 DTL",
  )}
  - ${cyan("constrained")} = ${underscore("Re-roll 3d6 DTL with constraints")}
  - ${cyan("race-adjusted-constrained")} = ${underscore(
    "Apply racial modifiers, then re-roll 3d6 DTL with constraints",
  )}
  - ${cyan("race-adjusted-afterwards")} = ${underscore(
    "Roll 3d6 DTL, then apply racial modifiers",
  )}
  - ${cyan("race-adjusted-afterwards-constrained")} = ${underscore(
    "Re-roll 3d6 DTL with constraints, then apply racial modifiers",
  )}

Constraints type shortcuts:
  - ${cyan("random")} = ${underscore(
    "At least X scores should be no less than Y",
  )}
  - ${cyan("every")} = ${underscore(
    "Discard sets that have every score less than or equal to X",
  )}
  - ${cyan("fixed")} = ${underscore(
    "Selected scores should be no less than the given target values",
  )}
  - ${cyan("class")} = ${underscore(
    "Scores should be enough to have a positive PRM for a selected class",
  )}
  - ${cyan("none")} = ${underscore("None (just racial requirements)")}
`;

export const createYargsParser = () =>
  yargs(hideBin(process.argv))
    .options({
      source: {
        choices: [
          "classic",
          "advanced",
          "advanced-with-carcass-crawler",
        ] as const,
        alias: "s",
        description: "The source of classes",
      },
      mode: {
        choices: ["roll", "analyze"] as const,
        alias: "m",
        description: "Roll or analyze the results",
      },
      method: {
        choices: [
          "simple",
          "race-adjusted",
          "constrained",
          "race-adjusted-constrained",
          "race-adjusted-afterwards",
          "race-adjusted-afterwards-constrained",
        ] as const,
        alias: "e",
        description: `Method of rolling`,
      },
      "constraints-type": {
        choices: ["random", "every", "fixed", "class", "none"] as const,
        alias: "c",
        description: "Type of constraints",
      },
      pick: {
        alias: "p",
        description: "Let Oseer pick a class for you",
        type: "boolean",
      },
    })
    .check(check)
    .example(
      "$0 -m roll -s classic -e simple",
      `Rolls with 'Classic Fantasy' classes 3d6 DTL`,
    )
    .example(
      "$0 -m roll -s classic -e constrained -c random",
      `Asks for random constraint, then re-rolls with 'Classic Fantasy' classes 3d6 DTL`,
    )
    .example(
      "$0 -m roll -s advanced-with-carcass-crawler -e race-adjusted",
      `First asks for racial modifiers, then rolls with 'Advanced Fantasy' + 'Carcass Crawler' classes 3d6 DTL`,
    )
    .example(
      "$0 -m roll -s advanced -e race-adjusted-afterwards",
      `Rolls with 'Advanced Fantasy' classes 3d6 DTL, shows intermediate result, then asks for racial modifiers`,
    )
    .example(
      "$0 -m roll -s classic -e race-adjusted-constrained",
      `First asks for racial modifiers, then for constraints type and values, then rolls with 'Classic Fantasy' classes 3d6 DTL and re-rolls until constraints are met`,
    )
    .epilogue(epilogue);
