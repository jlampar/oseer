import {
  Ability,
  Class,
  ClassConfigEntry,
  ClassesConfig,
  DemiHumanClass,
} from "../../types";
import { ZERO_VALUES } from "../const";
import { getNormalizedScoreConstraint } from "./getNormalizedScoreConstraint";

export const convertClassToConstraints = (
  className: Class | DemiHumanClass,
  classesConfig: ClassesConfig<Class>,
  demiHumanClassesConfig: ClassesConfig<DemiHumanClass>,
): Record<Ability, number> => {
  const {
    requirements,
    primeRequisite: { "5": minPositivePrimeRequisites },
  }: ClassConfigEntry<Class | DemiHumanClass> = [
    ...classesConfig,
    ...demiHumanClassesConfig,
  ].find(({ name }) => name === className)!;

  const positivePrimeRequisitesMinScores =
    minPositivePrimeRequisites[
      Math.floor(Math.random() * minPositivePrimeRequisites.length)
    ];

  return Object.keys(ZERO_VALUES).reduce<Record<Ability, number>>(
    (constraints: Record<Ability, number>, ability: string) =>
      Object.assign(constraints, {
        ...constraints,
        [ability as Ability]: getNormalizedScoreConstraint(
          String(
            Math.max(
              requirements?.[ability as Ability] || 0,
              positivePrimeRequisitesMinScores?.[ability as Ability] || 0,
            ),
          ),
        ),
      }),
    ZERO_VALUES,
  );
};
