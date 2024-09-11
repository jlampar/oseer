import { RollResult } from "../types";
import { rollAbilityScores } from "./rollAbilityScores";
import * as rollModule from "./roll";

describe("rollAbilityScores", () => {
  it("should mutate the inputed scores with a new set", () => {
    const newRollValue: RollResult = [6, 5, 4, 15];
    const rollSpy = jest
      .spyOn(rollModule, "roll")
      .mockImplementation(() => newRollValue);

    const result = rollAbilityScores();

    expect(rollSpy).toHaveBeenCalledTimes(6);
    expect(result.STR).toEqual(newRollValue);
    expect(result.DEX).toEqual(newRollValue);
    expect(result.CON).toEqual(newRollValue);
    expect(result.WIS).toEqual(newRollValue);
    expect(result.INT).toEqual(newRollValue);
    expect(result.CHA).toEqual(newRollValue);
  });
});
