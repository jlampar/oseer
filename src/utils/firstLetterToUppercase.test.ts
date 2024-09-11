import { firstLetterToUppercase } from "./firstLetterToUppercase";

describe("firstLetterToUppercase", () => {
  it("should convert first letter to uppercase and leave the rest intact", () => {
    expect(firstLetterToUppercase("lorem ipsum")).toEqual("Lorem ipsum");
  });
});
