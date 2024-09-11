import { bright } from "./bright";

describe("bright", () => {
  it("should correctly style text as bright", () => {
    const styled = bright("text");

    expect(styled).toEqual("\x1b[1mtext\x1b[0m");
  });
});
