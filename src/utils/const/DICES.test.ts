import { DICES } from "./DICES";

describe("DICES", () => {
  it("should have correct value for every index", () => {
    expect(DICES[0]).toEqual("⊠");
    expect(DICES[1]).toEqual("⚀");
    expect(DICES[2]).toEqual("⚁");
    expect(DICES[3]).toEqual("⚂");
    expect(DICES[4]).toEqual("⚃");
    expect(DICES[5]).toEqual("⚄");
    expect(DICES[6]).toEqual("⚅");
  });
});
