import { roll } from "./roll";

describe("roll", () => {
  it("should return a valid roll result", () => {
    const rollResult = roll();

    const [diceOne, diceTwo, diceThree, sum] = rollResult;

    const isValidDiceValue = (diceValue: number): boolean =>
      diceValue >= 1 && diceValue <= 6;

    expect(isValidDiceValue(diceOne)).toEqual(true);
    expect(isValidDiceValue(diceTwo)).toEqual(true);
    expect(isValidDiceValue(diceThree)).toEqual(true);
    expect(sum).toEqual(diceOne + diceTwo + diceThree);
  });
});
