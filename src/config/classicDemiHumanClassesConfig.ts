import { ClassesConfig, DemiHumanClass } from "../types";

/**
 * Config with all the Classic Fantasy Demi-Human Classes metadata (name, min requirements, PRM formulas).
 */
export const classicDemiHumanClassesConfig: ClassesConfig<DemiHumanClass> = [
  {
    name: "dwarf",
    requirements: { CON: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }],
      "10": [{ STR: 16 }],
    },
  },
  {
    name: "elf",
    requirements: { INT: 9 },
    primeRequisite: {
      "5": [{ STR: 13, INT: 13 }],
      "10": [{ STR: 13, INT: 16 }],
    },
  },
  {
    name: "halfling",
    requirements: { DEX: 9, CON: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }, { DEX: 13 }],
      "10": [{ STR: 13, DEX: 13 }],
    },
  },
];
