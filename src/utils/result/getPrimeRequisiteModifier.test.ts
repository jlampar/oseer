import { getPrimeRequisiteModifier } from "./getPrimeRequisiteModifier";

describe("getPrimeRequisiteModifier", () => {
  it("should correctly get PRM for scores between 3 and 5", () => {
    const prm = getPrimeRequisiteModifier(4);

    expect(prm).toEqual(-20);
  });

  it("should correctly get PRM for scores between 6 and 8", () => {
    const prm = getPrimeRequisiteModifier(7);

    expect(prm).toEqual(-10);
  });

  it("should correctly get PRM for scores between 9 and 12", () => {
    const prm = getPrimeRequisiteModifier(10);

    expect(prm).toEqual(0);
  });

  it("should correctly get PRM for scores between 13 and 15", () => {
    const prm = getPrimeRequisiteModifier(14);

    expect(prm).toEqual(5);
  });

  it("should correctly get PRM for scores between 16 and 18", () => {
    const prm = getPrimeRequisiteModifier(17);

    expect(prm).toEqual(10);
  });
});
