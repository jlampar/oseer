import { green } from "./green";

describe("green", () => {
  it("should correctly style text as green", () => {
    const styled = green("text");

    expect(styled).toEqual("\x1b[32mtext\x1b[0m");
  });
});
