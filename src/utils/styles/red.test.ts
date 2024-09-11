import { red } from "./red";

describe("red", () => {
  it("should correctly style text as red", () => {
    const styled = red("text");

    expect(styled).toEqual("\x1b[31mtext\x1b[0m");
  });
});
