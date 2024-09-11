import { Ability } from "../../types";
import { convertInputAbilityScores } from "./convertInputAbilityScores";

describe("convertInputAbilityScores", () => {
  it("should correctly convert all valid scores", () => {
    const input: Record<Ability, string> = {
      STR: "13",
      DEX: "10",
      CON: "11",
      WIS: "9",
      INT: "17",
      CHA: "12",
    };

    const converted = convertInputAbilityScores(input);

    expect(converted.STR).toBe(13);
    expect(converted.DEX).toBe(10);
    expect(converted.CON).toBe(11);
    expect(converted.WIS).toBe(9);
    expect(converted.INT).toBe(17);
    expect(converted.CHA).toBe(12);
  });

  it("should correctly convert scores when there are too high or low scores", () => {
    const input: Record<Ability, string> = {
      STR: "19",
      DEX: "10",
      CON: "0",
      WIS: "2",
      INT: "17",
      CHA: "12",
    };

    const converted = convertInputAbilityScores(input);

    expect(converted.STR).toBe(18);
    expect(converted.DEX).toBe(10);
    expect(converted.CON).toBe(0);
    expect(converted.WIS).toBe(3);
    expect(converted.INT).toBe(17);
    expect(converted.CHA).toBe(12);
  });

  it("should correctly convert scores when there are non numeric scores", () => {
    const input: Record<Ability, string> = {
      STR: "-19",
      DEX: "abc",
      CON: "/",
      WIS: "?",
      INT: "_",
      CHA: "*",
    };

    const converted = convertInputAbilityScores(input);

    expect(converted.STR).toBe(0);
    expect(converted.DEX).toBe(0);
    expect(converted.CON).toBe(0);
    expect(converted.WIS).toBe(0);
    expect(converted.INT).toBe(0);
    expect(converted.CHA).toBe(0);
  });

  it("should correctly convert scores when there are too high or low scores and also non numeric ones", () => {
    const input: Record<Ability, string> = {
      STR: "19",
      DEX: "10",
      CON: "/",
      WIS: "?",
      INT: "_",
      CHA: "*",
    };

    const converted = convertInputAbilityScores(input);

    expect(converted.STR).toBe(18);
    expect(converted.DEX).toBe(10);
    expect(converted.CON).toBe(0);
    expect(converted.WIS).toBe(0);
    expect(converted.INT).toBe(0);
    expect(converted.CHA).toBe(0);
  });
});
