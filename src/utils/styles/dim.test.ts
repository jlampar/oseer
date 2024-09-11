import { dim } from "./dim";

describe("dim", () => {
  it("should correctly style text as dim", () => {
    const styled = dim("text");

    expect(styled).toEqual("\x1b[2mtext\x1b[0m");
  });
});
