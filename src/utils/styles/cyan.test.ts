import { cyan } from "./cyan";

describe("cyan", () => {
  it("should correctly style text as cyan", () => {
    const styled = cyan("text");

    expect(styled).toEqual("\x1b[36mtext\x1b[0m");
  });
});
