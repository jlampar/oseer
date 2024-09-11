import { ClassesConfig, DemiHumanClass } from "../types";

/**
 * Config with all the Advanced Fantasy Demi-Human Classes metadata (name, min requirements, PRM formulas).
 */
export const advancedDemiHumanClassesConfig: ClassesConfig<DemiHumanClass> = [
  {
    name: "drow",
    requirements: { INT: 9 },
    primeRequisite: {
      "5": [{ STR: 13, WIS: 13 }],
      "10": [{ STR: 13, WIS: 16 }],
    },
  },
  {
    name: "duergar",
    requirements: { CON: 9, INT: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }],
      "10": [{ STR: 16 }],
    },
  },
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
    name: "gnome",
    requirements: { CON: 9 },
    primeRequisite: {
      "5": [{ DEX: 13, INT: 13 }],
      "10": [{ DEX: 13, INT: 16 }],
    },
  },
  {
    name: "half-elf",
    requirements: { CON: 9, CHA: 9 },
    primeRequisite: {
      "5": [{ STR: 13, INT: 13 }],
      "10": [
        { STR: 16, INT: 13 },
        { STR: 13, INT: 16 },
      ],
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
  {
    name: "half-orc",
    requirements: null,
    primeRequisite: {
      "5": [{ STR: 13, DEX: 13 }],
      "10": [{ STR: 16, DEX: 16 }],
    },
  },
  {
    name: "svirfneblin",
    requirements: { CON: 9 },
    primeRequisite: {
      "5": [{ STR: 13 }],
      "10": [{ STR: 16 }],
    },
  },
];
