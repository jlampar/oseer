import { getRollResult } from "./getRollResult";

describe("getRollResult", () => {
  it("should return a valid roll result", () => {
    const value = 13;
    const rollResult = getRollResult(value);

    const [diceOne, diceTwo, diceThree, sum] = rollResult;

    expect(diceOne).toEqual(0);
    expect(diceTwo).toEqual(0);
    expect(diceThree).toEqual(0);
    expect(sum).toEqual(value);
  });
});
