import {
  classicClassesConfig,
  classicDemiHumanClassesConfig,
  advancedClassesConfig,
  advancedDemiHumanClassesConfig,
  advancedWithCarcassCrawlerClassesConfig,
  advancedWithCarcassCrawlerDemiHumanClassesConfig,
  homebrewClassesConfig,
  homebrewDemiHumanClassesConfig,
} from "../config";
import { Class, ClassesConfig, DemiHumanClass, Source } from "../types";

/**
 * Returns the configs associated with the provided source. Before returning, it also concats all the Classes and Demi-Human Classes from the hombrew collection.
 * @param source a provided source of classes.
 * @returns the configs associated with the provided source
 */
export const getConfigs = (
  source: Source,
): [ClassesConfig<Class>, ClassesConfig<DemiHumanClass>] | never => {
  let classesConfig: ClassesConfig<Class>;
  let demiHumanClassesConfig: ClassesConfig<DemiHumanClass>;

  switch (source) {
    case "classic":
      classesConfig = classicClassesConfig;
      demiHumanClassesConfig = classicDemiHumanClassesConfig;

      break;
    case "advanced":
      classesConfig = advancedClassesConfig;
      demiHumanClassesConfig = advancedDemiHumanClassesConfig;

      break;
    case "advanced-with-carcass-crawler":
      classesConfig = advancedWithCarcassCrawlerClassesConfig;
      demiHumanClassesConfig = advancedWithCarcassCrawlerDemiHumanClassesConfig;

      break;
    default:
      throw new Error(`Unexisiting source: ${source}`);
  }

  return [
    classesConfig.concat(...homebrewClassesConfig),
    demiHumanClassesConfig.concat(...homebrewDemiHumanClassesConfig),
  ];
};
