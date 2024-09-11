import { underscore } from "./underscore";

describe("underscore", () => {
  it("should correctly style text as underscored", () => {
    const styled = underscore("text");

    expect(styled).toEqual("\x1b[4mtext\x1b[0m");
  });
});
