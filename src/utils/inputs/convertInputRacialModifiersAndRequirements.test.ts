import { Ability } from "../../types";
import { convertInputRacialModifiersAndRequirements } from "./convertInputRacialModifiersAndRequirements";

describe("convertInputRacialModifiersAndRequirements", () => {
  it("should correctly convert all valid modifiers", () => {
    const input: Record<Ability, string> = {
      STR: "1",
      DEX: "+1",
      CON: "-2",
      WIS: "0",
      INT: "0",
      CHA: "0",
    };

    const { racialModifiers } =
      convertInputRacialModifiersAndRequirements(input);

    expect(racialModifiers.STR).toBe(1);
    expect(racialModifiers.DEX).toBe(1);
    expect(racialModifiers.CON).toBe(-2);
    expect(racialModifiers.WIS).toBe(0);
    expect(racialModifiers.INT).toBe(0);
    expect(racialModifiers.CHA).toBe(0);
  });

  it("should correctly convert modifiers when there are some non-numeric values", () => {
    const input: Record<Ability, string> = {
      STR: "1",
      DEX: "+1",
      CON: "-2",
      WIS: "abc",
      INT: "?",
      CHA: "/",
    };

    const { racialModifiers } =
      convertInputRacialModifiersAndRequirements(input);

    expect(racialModifiers.STR).toBe(1);
    expect(racialModifiers.DEX).toBe(1);
    expect(racialModifiers.CON).toBe(-2);
    expect(racialModifiers.WIS).toBe(0);
    expect(racialModifiers.INT).toBe(0);
    expect(racialModifiers.CHA).toBe(0);
  });

  it("should correctly convert modifiers when there are requirements too", () => {
    const input: Record<Ability, string> = {
      STR: "1",
      DEX: "+1,9",
      CON: "-2",
      WIS: "0",
      INT: "0,9",
      CHA: "0",
    };

    const { racialModifiers, racialRequirements } =
      convertInputRacialModifiersAndRequirements(input);

    expect(racialModifiers.STR).toBe(1);
    expect(racialModifiers.DEX).toBe(1);
    expect(racialModifiers.CON).toBe(-2);
    expect(racialModifiers.WIS).toBe(0);
    expect(racialModifiers.INT).toBe(0);
    expect(racialModifiers.CHA).toBe(0);
    expect(racialRequirements.STR).toBe(0);
    expect(racialRequirements.DEX).toBe(9);
    expect(racialRequirements.CON).toBe(0);
    expect(racialRequirements.WIS).toBe(0);
    expect(racialRequirements.INT).toBe(9);
    expect(racialRequirements.CHA).toBe(0);
  });
});
