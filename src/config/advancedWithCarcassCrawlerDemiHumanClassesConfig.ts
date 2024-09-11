import { ClassesConfig, DemiHumanClass } from "../types";

/**
 * Config with all the Advanced Fantasy Demi-Human Classes metadata (name, min requirements, PRM formulas). Additionally the metadata for Carcass Crawler Demi-Human Classes is included.
 */
export const advancedWithCarcassCrawlerDemiHumanClassesConfig: ClassesConfig<DemiHumanClass> =
  [
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
    {
      name: "gargantua",
      requirements: { STR: 9, CON: 9 },
      primeRequisite: {
        "5": [{ STR: 13, CON: 13 }],
        "10": [{ STR: 16, CON: 13 }],
      },
    },
    {
      name: "goblin",
      requirements: { DEX: 9 },
      primeRequisite: {
        "5": [{ STR: 13 }, { DEX: 13 }],
        "10": [{ STR: 16, DEX: 16 }],
      },
    },
    {
      name: "hephaestan",
      requirements: { CON: 9, CHA: 9 },
      primeRequisite: {
        "5": [{ WIS: 13, INT: 13 }],
        "10": [{ WIS: 13, INT: 16 }],
      },
    },
    {
      name: "phase elf",
      requirements: { INT: 9 },
      primeRequisite: {
        "5": [{ STR: 13, INT: 13 }],
        "10": [{ STR: 13, INT: 16 }],
      },
    },
    {
      name: "wood elf",
      requirements: { DEX: 9, INT: 9 },
      primeRequisite: {
        "5": [{ DEX: 13, WIS: 13 }],
        "10": [{ DEX: 16, WIS: 13 }],
      },
    },
    {
      name: "dragonborn",
      requirements: { CON: 9, INT: 9 },
      primeRequisite: {
        "5": [{ STR: 13 }],
        "10": [{ STR: 16 }],
      },
    },
    {
      name: "mutoid",
      requirements: null,
      primeRequisite: {
        "5": [{ DEX: 13 }],
        "10": [{ DEX: 16 }],
      },
    },
    {
      name: "mycelian",
      requirements: { CON: 9 },
      primeRequisite: {
        "5": [{ STR: 13 }],
        "10": [{ STR: 16 }],
      },
    },
    {
      name: "tiefling",
      requirements: { INT: 9 },
      primeRequisite: {
        "5": [{ DEX: 13 }, { CHA: 13 }],
        "10": [{ DEX: 16, CHA: 16 }],
      },
    },
  ];
