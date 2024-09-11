import { Ability, Class, DemiHumanClass, Method, Source } from "../../types";
import { getConfigs } from "../getConfigs";
import { cyan, indent } from "../styles";
import { convertClassToConstraints } from "./convertClassToConstraints";
import { runConstraintsClassPrompt } from "./runConstraintsClassPrompt";

/**
 * Runs constraints 'class' prompt and on submit displays the choice, then preprocesses the input and returns it.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @returns preprocessed constraints 'class' input + the name of the class
 */
export const getConstraintsClass = async (
  source: Source,
  method: Method,
): Promise<[Record<Ability, number>, Class | DemiHumanClass]> | never => {
  const [classesConfig, demiHumanClassesConfig] = getConfigs(source);
  const config =
    method === "race-adjusted-afterwards-constrained" ||
    method === "race-adjusted-constrained"
      ? classesConfig
      : [...classesConfig, ...demiHumanClassesConfig];

  return runConstraintsClassPrompt(config).then(
    (value: Class | DemiHumanClass) => {
      console.log(indent(`Targeting ${cyan(value)}\n`, 2));

      return [
        convertClassToConstraints(value, classesConfig, demiHumanClassesConfig),
        value,
      ];
    },
  );
};
