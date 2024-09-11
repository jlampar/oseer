import {
  advancedWithCarcassCrawlerClassesConfig,
  advancedWithCarcassCrawlerDemiHumanClassesConfig,
} from "../../config";
import { Ability, RollResult } from "../../types";
import { evaluateRecommendations } from "./evaluateRecommendations";

describe("evaluateRecommendations", () => {
  describe("best", () => {
    it("should correctly assess scores as best fitting for an acrobat", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("acrobat")).toBe(true);
    });

    it("should correctly assess scores as best fitting for an assassin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("assassin")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a barbarian", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 16],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("barbarian")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a bard", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 16],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("bard")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a cleric", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("cleric")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a drow", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("drow")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a druid", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("druid")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a duergar", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("duergar")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a dwarf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("dwarf")).toBe(true);
    });

    it("should correctly assess scores as best fitting for an elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("elf")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a fighter", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("fighter")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a gnome", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("gnome")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a half-elf in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );
      const { best: bestDemiHumanClassesAnotherVariant } =
        evaluateRecommendations(
          rolledAbilityScoresAnotherVariant,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(
        bestDemiHumanClassesOneVariant.includes("half-elf") &&
          bestDemiHumanClassesAnotherVariant.includes("half-elf"),
      ).toBe(true);
    });

    it("should correctly assess scores as best fitting for a halfling", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("halfling")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a half-orc", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("half-orc")).toBe(true);
    });

    it("should correctly assess scores as best fitting for an illusionist", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("illusionist")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a knight", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("knight")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a magic-user", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("magic-user")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a paladin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("paladin")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a ranger", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("ranger")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a svirfneblin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("svirfneblin")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a thief", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("thief")).toBe(true);
    });

    it("should correctly assess scores as best fitting for an acolyte", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("acolyte")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a gargantua", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 13],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("gargantua")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a goblin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("goblin")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a hephaestan", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("hephaestan")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a kineticist", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("kineticist")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a mage", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("mage")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a phase elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 16],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("phase elf")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a wood elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("wood elf")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a beast master", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 16],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(bestClasses.includes("beast master")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a dragonborn", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("dragonborn")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a mutoid", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("mutoid")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a mycelian", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 16],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("mycelian")).toBe(true);
    });

    it("should correctly assess scores as best fitting for a tiefling", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 16],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 16],
      };

      const { best: bestDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(bestDemiHumanClasses.includes("tiefling")).toBe(true);
    });
  });

  describe("good", () => {
    it("should correctly assess scores as a good fit for an acrobat", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("acrobat")).toBe(true);
    });

    it("should correctly assess scores as a good fit for an assassin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("assassin")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a barbarian in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 13],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );
      const { good: goodClassesAnotherVariant } = evaluateRecommendations(
        rolledAbilityScoresAnotherVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(
        goodClassesOneVariant.includes("barbarian") &&
          goodClassesAnotherVariant.includes("barbarian"),
      ).toBe(true);
    });

    it("should correctly assess scores as a good fit for a bard", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 13],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("bard")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a cleric", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("cleric")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a drow", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("drow")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a druid", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("druid")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a duergar", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("duergar")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a dwarf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("dwarf")).toBe(true);
    });

    it("should correctly assess scores as a good fit for an elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("elf")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a fighter", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("fighter")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a gnome", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("gnome")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a half-elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("half-elf")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a halfling in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );
      const { good: goodDemiHumanClassesAnotherVariant } =
        evaluateRecommendations(
          rolledAbilityScoresAnotherVariant,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(
        goodDemiHumanClassesOneVariant.includes("halfling") &&
          goodDemiHumanClassesAnotherVariant.includes("halfling"),
      ).toBe(true);
    });

    it("should correctly assess scores as a good fit for a half-orc", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("half-orc")).toBe(true);
    });

    it("should correctly assess scores as a good fit for an illusionist", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("illusionist")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a knight", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("knight")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a magic-user", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("magic-user")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a paladin in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );
      const { good: goodClassesAnotherVariant } = evaluateRecommendations(
        rolledAbilityScoresAnotherVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(
        goodClassesOneVariant.includes("paladin") &&
          goodClassesAnotherVariant.includes("paladin"),
      ).toBe(true);
    });

    it("should correctly assess scores as a good fit for a ranger", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("ranger")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a svirfneblin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("svirfneblin")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a thief", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("thief")).toBe(true);
    });

    it("should correctly assess scores as a good fit for an acolyte", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("acolyte")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a gargantua", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 13],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("gargantua")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a goblin in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );
      const { good: goodDemiHumanClassesAnotherVariant } =
        evaluateRecommendations(
          rolledAbilityScoresAnotherVariant,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(
        goodDemiHumanClassesOneVariant.includes("goblin") &&
          goodDemiHumanClassesAnotherVariant.includes("goblin"),
      ).toBe(true);
    });

    it("should correctly assess scores as a good fit for a hephaestan", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("hephaestan")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a kineticist", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("kineticist")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a mage", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(goodClasses.includes("mage")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a phase elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 13],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("phase elf")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a wood elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("wood elf")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a beast master in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 13],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );
      const { good: goodClassesAnotherVariant } = evaluateRecommendations(
        rolledAbilityScoresAnotherVariant,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(
        goodClassesOneVariant.includes("beast master") &&
          goodClassesAnotherVariant.includes("beast master"),
      ).toBe(true);
    });

    it("should correctly assess scores as a good fit for a dragonborn", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("dragonborn")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a mutoid", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("mutoid")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a mycelian", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 13],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };

      const { good: goodDemiHumanClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );

      expect(goodDemiHumanClasses.includes("mycelian")).toBe(true);
    });

    it("should correctly assess scores as a good fit for a tiefling in both variants", () => {
      const rolledAbilityScoresOneVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 13],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 10],
      };
      const rolledAbilityScoresAnotherVariant: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 10],
        DEX: [0, 0, 0, 10],
        CON: [0, 0, 0, 10],
        WIS: [0, 0, 0, 10],
        INT: [0, 0, 0, 10],
        CHA: [0, 0, 0, 13],
      };

      const { good: goodDemiHumanClassesOneVariant } = evaluateRecommendations(
        rolledAbilityScoresOneVariant,
        advancedWithCarcassCrawlerDemiHumanClassesConfig,
      );
      const { good: goodDemiHumanClassesAnotherVariant } =
        evaluateRecommendations(
          rolledAbilityScoresAnotherVariant,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(
        goodDemiHumanClassesOneVariant.includes("tiefling") &&
          goodDemiHumanClassesAnotherVariant.includes("tiefling"),
      ).toBe(true);
    });
  });

  describe("unavailable", () => {
    it("should correctly assess scores as not fit for a barbarian", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("barbarian")).toBe(true);
    });

    it("should correctly assess scores as not fit for a bard", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("bard")).toBe(true);
    });

    it("should correctly assess scores as not fit for a drow", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("drow")).toBe(true);
    });

    it("should correctly assess scores as not fit for a duergar", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("duergar")).toBe(true);
    });

    it("should correctly assess scores as not fit for a dwarf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("dwarf")).toBe(true);
    });

    it("should correctly assess scores as not fit for an elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("elf")).toBe(true);
    });

    it("should correctly assess scores as not fit for a gnome", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("gnome")).toBe(true);
    });

    it("should correctly assess scores as not fit for a half-elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 8],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("half-elf")).toBe(true);
    });

    it("should correctly assess scores as not fit for a halfling", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("halfling")).toBe(true);
    });

    it("should correctly assess scores as not fit for an illusionist", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("illusionist")).toBe(true);
    });

    it("should correctly assess scores as not fit for a knight", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("knight")).toBe(true);
    });

    it("should correctly assess scores as not fit for a paladin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 8],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("paladin")).toBe(true);
    });

    it("should correctly assess scores as not fit for a ranger", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 8],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableClasses } = evaluateRecommendations(
        rolledAbilityScores,
        advancedWithCarcassCrawlerClassesConfig,
      );

      expect(unavailableClasses.includes("ranger")).toBe(true);
    });

    it("should correctly assess scores as not fit for a svirfneblin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("svirfneblin")).toBe(true);
    });

    it("should correctly assess scores as not fit for a gargantua", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 8],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("gargantua")).toBe(true);
    });

    it("should correctly assess scores as not fit for a goblin", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("goblin")).toBe(true);
    });

    it("should correctly assess scores as not fit for a hephaestan", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 8],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("hephaestan")).toBe(true);
    });

    it("should correctly assess scores as not fit for a phase elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("phase elf")).toBe(true);
    });

    it("should correctly assess scores as not fit for a wood elf", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 8],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("wood elf")).toBe(true);
    });

    it("should correctly assess scores as not fit for a dragonborn", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("dragonborn")).toBe(true);
    });

    it("should correctly assess scores as not fit for a mycelian", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 8],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 18],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("mycelian")).toBe(true);
    });

    it("should correctly assess scores as not fit for a tiefling", () => {
      const rolledAbilityScores: Record<Ability, RollResult> = {
        STR: [0, 0, 0, 18],
        DEX: [0, 0, 0, 18],
        CON: [0, 0, 0, 18],
        WIS: [0, 0, 0, 18],
        INT: [0, 0, 0, 8],
        CHA: [0, 0, 0, 18],
      };

      const { unavailable: unavailableDemiHumanClasses } =
        evaluateRecommendations(
          rolledAbilityScores,
          advancedWithCarcassCrawlerDemiHumanClassesConfig,
        );

      expect(unavailableDemiHumanClasses.includes("tiefling")).toBe(true);
    });
  });
});
