import { Class, DemiHumanClass } from "../../types";
import { indent, cyan } from "../styles";

const getShouldPickationMessage = <T extends Class | DemiHumanClass>(
  pick: T,
  allBest: Array<T>,
  allGood: Array<T>,
  bestPrefix: string,
  goodPrefix: string,
  availablePrefix: string,
): string => {
  if (allBest.includes(pick)) {
    return bestPrefix;
  } else if (allGood.includes(pick)) {
    return goodPrefix;
  }

  return availablePrefix;
};

const getClassRecommendationMessage = <T extends Class | DemiHumanClass>(
  pick: T,
  allBest: Array<T>,
  allGood: Array<T>,
  isVowel: boolean,
): string => {
  const p = isVowel ? `an ${cyan(pick)}` : `a ${cyan(pick)}`;

  return getShouldPickationMessage(
    pick,
    allBest,
    allGood,
    `The prophecy is true, you will be ${p}.`,
    `Your fate is clear, walk the path of ${p}.`,
    `You're doomed to become ${p}.`,
  );
};

const getDemiHumanClassRecommendationMessage = <
  T extends Class | DemiHumanClass,
>(
  pick: T,
  allBest: Array<T>,
  allGood: Array<T>,
  isVowel: boolean,
): string =>
  getShouldPickationMessage(
    pick,
    allBest,
    allGood,
    `Be a paragon of your own kind, ${cyan(pick)}.`,
    `Follow the ways of your lineage, ${cyan(pick)}.`,
    `You're doomed to stay just ${
      isVowel ? `an ${cyan(pick)}` : `a ${cyan(pick)}`
    }.`,
  );

/**
 * Renders a random class, optimizing for the highest PRM possible.
 * @param bestClasses list of all eligible classess with +10% PRM
 * @param bestDemiHumanClasses list of all eligible demi-human classess with +10% PRM
 * @param goodClasses list of all eligible classess with +5% PRM
 * @param goodDemiHumanClasses list of all eligible demi-human classess with +5% PRM
 * @param availableClasses list of all eligible classess with no positive PRM
 * @param availableDemiHumanClasses list of all eligible demi-human classess with no positive PRM
 * @param targetClass a class being targed via `class` constraint (if provided)
 */
export const renderPick = (
  bestClasses: Array<Class>,
  bestDemiHumanClasses: Array<DemiHumanClass>,
  goodClasses: Array<Class>,
  goodDemiHumanClasses: Array<DemiHumanClass>,
  availableClasses: Array<Class>,
  availableDemiHumanClasses: Array<DemiHumanClass>,
  targetClass: Class | DemiHumanClass | null,
): void => {
  const shuffle = <T>(array: T[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  };

  const allBest = [...bestClasses, ...bestDemiHumanClasses];
  const allGood = [...goodClasses, ...goodDemiHumanClasses];
  const allAvailable = [...availableClasses, ...availableDemiHumanClasses];

  const pick: Class | DemiHumanClass =
    targetClass &&
    [...allBest, ...allGood, ...allAvailable].includes(targetClass)
      ? targetClass
      : [...shuffle(allBest), ...shuffle(allGood), ...shuffle(allAvailable)][0];
  const isClassPick = [
    ...bestClasses,
    ...goodClasses,
    ...availableClasses,
  ].includes(pick as Class);

  console.log("\n");

  const isVowel = ["a", "e", "i", "o", "u"].includes(pick[0]);

  if (isClassPick) {
    console.log(
      indent(getClassRecommendationMessage(pick, allBest, allGood, isVowel), 2),
    );
  } else {
    console.log(
      indent(
        getDemiHumanClassRecommendationMessage(pick, allBest, allGood, isVowel),
        2,
      ),
    );
  }
};
