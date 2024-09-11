import { ClassesConfig, Class } from "../types";

/**
 * Config with all the Advanced Fantasy Classes metadata (name, min requirements, PRM formulas).
 */
export const advancedClassesConfig: ClassesConfig<Class> = [
  {
    name: "acrobat",
    requirements: null,
    primeRequisite: {
      "5": [{ DEX: 13 }],
      "10": [{ DEX: 16 }],
    },
  },
  {
    name: "assassin",
    requirements: null,
    primeRequisite: {
      "5": [{ DEX: 13 }],
      "10": [{ DEX: 16 }],
    },
  },
  {
    name: "barbarian",
    requirements: { DEX: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }, { CON: 13 }],
      "10": [{ STR: 16, CON: 16 }],
    },
  },
  {
    name: "bard",
    requirements: { DEX: 9, INT: 9 },
    primeRequisite: {
      "5": [{ CHA: 13 }],
      "10": [{ CHA: 16 }],
    },
  },
  {
    name: "cleric",
    requirements: null,
    primeRequisite: {
      "5": [{ WIS: 13 }],
      "10": [{ WIS: 16 }],
    },
  },
  {
    name: "druid",
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
    name: "illusionist",
    requirements: { DEX: 9 },
    primeRequisite: {
      "5": [{ INT: 13 }],
      "10": [{ INT: 16 }],
    },
  },
  {
    name: "knight",
    requirements: { DEX: 9, CON: 9 },
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
    name: "paladin",
    requirements: { CHA: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }, { WIS: 13 }],
      "10": [{ STR: 16, WIS: 16 }],
    },
  },
  {
    name: "ranger",
    requirements: { CON: 9, WIS: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }],
      "10": [{ STR: 16 }],
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
