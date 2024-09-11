import { Ability, RollResult } from "../../types";
import { renderRecommendations } from "./renderRecommendations";

describe("renderRecommendations", () => {
  describe("classic", () => {
    it("should correctly render just available classes", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 9],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "classic",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "cleric",
        "fighter",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "dwarf",
        "elf",
        "halfling",
      );
    });

    it("should correctly render no demi-human recommendations when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "classic",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "cleric",
        "magic-user",
        "thief",
      );
    });

    it("should correctly render no demi-human unavailable classes when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "classic",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "cleric",
        "magic-user",
        "thief",
      );
    });

    it("should correctly render demi-human recommendations when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "classic",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(5);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Demi-human classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "dwarf",
        "halfling",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "cleric",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available demi-human classes: \x1b[32m%s\x1b[0m",
        "elf",
      );
    });

    it("should correctly render demi-human unavailable classes when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "classic",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(4);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "cleric",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable demi-human classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "dwarf",
        "elf",
        "halfling",
      );
    });
  });

  describe("advanced", () => {
    it("should correctly render just available classes", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 9],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "barbarian",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "illusionist",
        "knight",
        "magic-user",
        "paladin",
        "ranger",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "drow",
        "duergar",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "halfling",
        "half-orc",
        "svirfneblin",
      );
    });

    it("should correctly render no demi-human recommendations when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "barbarian",
        "fighter",
        "knight",
        "paladin",
        "ranger",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "bard",
        "cleric",
        "druid",
        "illusionist",
        "magic-user",
        "thief",
      );
    });

    it("should correctly render no demi-human unavailable classes when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(4);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "cleric",
        "druid",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "barbarian",
        "bard",
        "illusionist",
        "knight",
        "paladin",
        "ranger",
      );
    });

    it("should correctly render demi-human recommendations when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(5);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "barbarian",
        "fighter",
        "knight",
        "paladin",
        "ranger",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Demi-human classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "duergar",
        "dwarf",
        "halfling",
        "svirfneblin",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "bard",
        "cleric",
        "druid",
        "illusionist",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "drow",
        "elf",
        "gnome",
        "half-elf",
        "half-orc",
      );
    });

    it("should correctly render demi-human unavailable classes when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(6);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m",
        "fighter",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "cleric",
        "druid",
        "magic-user",
        "thief",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available demi-human classes: \x1b[32m%s\x1b[0m",
        "half-orc",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "barbarian",
        "bard",
        "illusionist",
        "knight",
        "paladin",
        "ranger",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable demi-human classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "drow",
        "duergar",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "halfling",
        "svirfneblin",
      );
    });
  });

  describe("advanced-with-carcass-crawler", () => {
    it("should correctly render just available classes", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 9],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced-with-carcass-crawler",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "barbarian",
        "bard",
        "cleric",
        "druid",
        "fighter",
        "illusionist",
        "knight",
        "magic-user",
        "paladin",
        "ranger",
        "thief",
        "acolyte",
        "kineticist",
        "mage",
        "beast master",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "drow",
        "duergar",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "halfling",
        "half-orc",
        "svirfneblin",
        "gargantua",
        "goblin",
        "hephaestan",
        "phase elf",
        "wood elf",
        "dragonborn",
        "mutoid",
        "mycelian",
        "tiefling",
      );
    });

    it("should correctly render no demi-human recommendations when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced-with-carcass-crawler",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(3);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "barbarian",
        "fighter",
        "knight",
        "paladin",
        "ranger",
        "beast master",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "bard",
        "cleric",
        "druid",
        "illusionist",
        "magic-user",
        "thief",
        "acolyte",
        "kineticist",
        "mage",
      );
    });

    it("should correctly render no demi-human unavailable classes when inputing racial modifiers is part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced-with-carcass-crawler",
        "race-adjusted",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(4);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "fighter",
        "beast master",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "cleric",
        "druid",
        "magic-user",
        "thief",
        "acolyte",
        "kineticist",
        "mage",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "barbarian",
        "bard",
        "illusionist",
        "knight",
        "paladin",
        "ranger",
      );
    });

    it("should correctly render demi-human recommendations when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 9],
        CON: [0, 0, 0, 9],
        WIS: [0, 0, 0, 9],
        INT: [0, 0, 0, 9],
        CHA: [0, 0, 0, 9],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced-with-carcass-crawler",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(5);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "barbarian",
        "fighter",
        "knight",
        "paladin",
        "ranger",
        "beast master",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Demi-human classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "duergar",
        "dwarf",
        "halfling",
        "svirfneblin",
        "goblin",
        "dragonborn",
        "mycelian",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "bard",
        "cleric",
        "druid",
        "illusionist",
        "magic-user",
        "thief",
        "acolyte",
        "kineticist",
        "mage",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "drow",
        "elf",
        "gnome",
        "half-elf",
        "half-orc",
        "gargantua",
        "hephaestan",
        "phase elf",
        "wood elf",
        "mutoid",
        "tiefling",
      );
    });

    it("should correctly render demi-human unavailable classes when inputing racial modifiers is not part of the method", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 8],
      };

      const consoleLogSpy = jest
        .spyOn(global.console, "log")
        .mockImplementation(() => {});

      renderRecommendations(
        "advanced-with-carcass-crawler",
        "simple",
        false,
        null,
        rolledAbilityScores,
      );

      expect(consoleLogSpy).toHaveBeenCalledTimes(6);
      expect(consoleLogSpy).toHaveBeenCalledWith("\n");
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Classes with \x1b[4m+5%\x1b[0m PRM: \x1b[36m%s\x1b[0m, \x1b[36m%s\x1b[0m",
        "fighter",
        "beast master",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Other available classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "acrobat",
        "assassin",
        "cleric",
        "druid",
        "magic-user",
        "thief",
        "acolyte",
        "kineticist",
        "mage",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Available demi-human classes: \x1b[32m%s\x1b[0m, \x1b[32m%s\x1b[0m",
        "half-orc",
        "mutoid",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "barbarian",
        "bard",
        "illusionist",
        "knight",
        "paladin",
        "ranger",
      );
      expect(consoleLogSpy).toHaveBeenCalledWith(
        "  Unavailable demi-human classes: \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m, \x1b[31m%s\x1b[0m",
        "drow",
        "duergar",
        "dwarf",
        "elf",
        "gnome",
        "half-elf",
        "halfling",
        "svirfneblin",
        "gargantua",
        "goblin",
        "hephaestan",
        "phase elf",
        "wood elf",
        "dragonborn",
        "mycelian",
        "tiefling",
      );
    });
  });
});
