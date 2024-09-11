import { ClassesConfig, Class } from "../types";

/**
 * Config with all the Classic Fantasy Classes metadata (name, min requirements, PRM formulas).
 */
export const classicClassesConfig: ClassesConfig<Class> = [
  {
    name: "cleric",
    requirements: null,
    primeRequisite: {
      "5": [{ WIS: 13 }],
      "10": [{ WIS: 16 }],
    },
  },
  {
    name: "fighter",
    requirements: null,
    primeRequisite: {
      "5": [{ STR: 13 }],
      "10": [{ STR: 16 }],
    },
  },
  {
    name: "magic-user",
    requirements: null,
    primeRequisite: {
      "5": [{ INT: 13 }],
      "10": [{ INT: 16 }],
    },
  },
  {
    name: "thief",
    requirements: null,
    primeRequisite: {
      "5": [{ DEX: 13 }],
      "10": [{ DEX: 16 }],
    },
  },
];
