import {
  Ability,
  RollResult,
  Method,
  Class,
  DemiHumanClass,
  Source,
} from "../../types";
import { getConfigs } from "../getConfigs";
import { evaluateRecommendations } from "../recommendations";
import { cyan, green, indent, red, underscore } from "../styles";
import { renderPick } from "./renderPick";

const renderBestClasses = (
  bestClasses: Array<Class>,
  insertCyanPlaceholders: (entries: Array<string>) => string,
) => {
  if (bestClasses.length) {
    console.log(
      indent(
        `Classes with ${underscore("+10%")} PRM: ${insertCyanPlaceholders(
          bestClasses,
        )}`,
        2,
      ),
      ...bestClasses,
    );
  }
};

const renderBestDemiHumanClasses = (
  bestDemiHumanClasses: Array<DemiHumanClass>,
  insertCyanPlaceholders: (entries: Array<string>) => string,
) => {
  if (bestDemiHumanClasses.length) {
    console.log(
      indent(
        `Demi-human classes with ${underscore(
          "+10%",
        )} PRM: ${insertCyanPlaceholders(bestDemiHumanClasses)}`,
        2,
      ),
      ...bestDemiHumanClasses,
    );
  }
};

const renderGoodClasses = (
  goodClasses: Array<Class>,
  insertCyanPlaceholders: (entries: Array<string>) => string,
) => {
  if (goodClasses.length) {
    console.log(
      indent(
        `Classes with ${underscore("+5%")} PRM: ${insertCyanPlaceholders(
          goodClasses,
        )}`,
        2,
      ),
      ...goodClasses,
    );
  }
};

const renderGoodDemiHumanClasses = (
  goodDemiHumanClasses: Array<DemiHumanClass>,
  insertCyanPlaceholders: (entries: Array<string>) => string,
) => {
  if (goodDemiHumanClasses.length) {
    console.log(
      indent(
        `Demi-human classes with ${underscore(
          "+5%",
        )} PRM: ${insertCyanPlaceholders(goodDemiHumanClasses)}`,
        2,
      ),
      ...goodDemiHumanClasses,
    );
  }
};

const renderAvailableClasses = (
  availableClasses: Array<Class>,
  insertGreenPlaceholders: (entries: Array<string>) => string,
  areAnyPositivePRMClasses: boolean,
) => {
  if (availableClasses.length) {
    const prefix = areAnyPositivePRMClasses
      ? "Other available classes: "
      : "Available classes: ";
    console.log(
      indent(`${prefix}${insertGreenPlaceholders(availableClasses)}`, 2),
      ...availableClasses,
    );
  }
};

const renderAvailableDemiHumanClasses = (
  availableDemiHumanClasses: Array<DemiHumanClass>,
  insertGreenPlaceholders: (entries: Array<string>) => string,
  areAnyPositivePRMClasses: boolean,
) => {
  if (availableDemiHumanClasses.length) {
    const prefix = areAnyPositivePRMClasses
      ? "Other available demi-human classes: "
      : "Available demi-human classes: ";
    console.log(
      indent(
        `${prefix}${insertGreenPlaceholders(availableDemiHumanClasses)}`,
        2,
      ),
      ...availableDemiHumanClasses,
    );
  }
};

const renderUnavailableClasses = (
  unavailableClasses: Array<Class>,
  insertRedPlaceholders: (entries: Array<string>) => string,
) => {
  if (unavailableClasses.length) {
    console.log(
      indent(
        `Unavailable classes: ${insertRedPlaceholders(unavailableClasses)}`,
        2,
      ),
      ...unavailableClasses,
    );
  }
};

const renderUnavailableDemiHumanClasses = (
  unavailableDemiHumanClasses: Array<DemiHumanClass>,
  insertRedPlaceholders: (entries: Array<string>) => string,
) => {
  if (unavailableDemiHumanClasses.length) {
    console.log(
      indent(
        `Unavailable demi-human classes: ${insertRedPlaceholders(
          unavailableDemiHumanClasses,
        )}`,
        2,
      ),
      ...unavailableDemiHumanClasses,
    );
  }
};

/**
 * Renders recommendations for a rolled Ability Scores. If the method is race adjusted (prior to roll or afterwards), it doesn't pick for Demi-Human Classes.
 * @param source a provided source of classes.
 * @param method the selected method of getting the final Ability Scores.
 * @param pick a boolean flag telling if the class should be picked by the Oseer.
 * @param targetClass a class being targed via `class` constraint (if provided)
 * @param rolledAbilityScores a record of 6 roll results for every one of 6 abilities.
 */
export const renderRecommendations = (
  source: Source,
  method: Method,
  pick: boolean,
  targetClass: Class | DemiHumanClass | null,
  rolledAbilityScores: Record<Ability, RollResult>,
) => {
  const [classesConfig, demiHumanClassesConfig] = getConfigs(source);
  const showDemiHumans: boolean =
    method !== "race-adjusted" &&
    method !== "race-adjusted-constrained" &&
    method !== "race-adjusted-afterwards" &&
    method !== "race-adjusted-afterwards-constrained";

  const {
    best: bestClasses,
    good: goodClasses,
    available: availableClasses,
    unavailable: unavailableClasses,
  } = evaluateRecommendations(rolledAbilityScores, classesConfig);

  const bestDemiHumanClasses: Array<DemiHumanClass> = [];
  const goodDemiHumanClasses: Array<DemiHumanClass> = [];
  const availableDemiHumanClasses: Array<DemiHumanClass> = [];
  const unavailableDemiHumanClasses: Array<DemiHumanClass> = [];

  if (showDemiHumans) {
    const { best, good, unavailable, available } = evaluateRecommendations(
      rolledAbilityScores,
      demiHumanClassesConfig,
    );

    bestDemiHumanClasses.push(...best);
    goodDemiHumanClasses.push(...good);
    unavailableDemiHumanClasses.push(...unavailable);
    availableDemiHumanClasses.push(...available);
  }

  if (pick) {
    renderPick(
      bestClasses,
      bestDemiHumanClasses,
      goodClasses,
      goodDemiHumanClasses,
      availableClasses,
      availableDemiHumanClasses,
      targetClass,
    );
  } else {
    const insertCyanPlaceholders = (entries: Array<string>) =>
      Array(entries.length).fill(cyan("%s")).join(", ");
    const insertGreenPlaceholders = (entries: Array<string>) =>
      Array(entries.length).fill(green("%s")).join(", ");
    const insertRedPlaceholders = (entries: Array<string>) =>
      Array(entries.length).fill(red("%s")).join(", ");
    const areAnyPositivePRMClasses = !!(
      bestClasses.length || goodClasses.length
    );
    const areAnyPositivePRMDemiHumanClasses = !!(
      bestDemiHumanClasses.length || goodDemiHumanClasses.length
    );

    if (
      areAnyPositivePRMClasses ||
      areAnyPositivePRMDemiHumanClasses ||
      availableClasses.length ||
      availableDemiHumanClasses.length ||
      unavailableClasses.length ||
      unavailableDemiHumanClasses.length
    ) {
      console.log("\n");
    }

    renderBestClasses(bestClasses, insertCyanPlaceholders);
    renderBestDemiHumanClasses(bestDemiHumanClasses, insertCyanPlaceholders);
    renderGoodClasses(goodClasses, insertCyanPlaceholders);
    renderGoodDemiHumanClasses(goodDemiHumanClasses, insertCyanPlaceholders);
    renderAvailableClasses(
      availableClasses,
      insertGreenPlaceholders,
      areAnyPositivePRMClasses,
    );
    renderAvailableDemiHumanClasses(
      availableDemiHumanClasses,
      insertGreenPlaceholders,
      areAnyPositivePRMDemiHumanClasses,
    );
    renderUnavailableClasses(unavailableClasses, insertRedPlaceholders);
    renderUnavailableDemiHumanClasses(
      unavailableDemiHumanClasses,
      insertRedPlaceholders,
    );
  }
};
