import { randomInRange } from "./randomInRange";

describe("randomInRange", () => {
  it("should always return value between x and y inclusive", () => {
    const x = 1;
    const y = 6;
    let everyResultInRange: boolean = true;

    for (let index = 0; index < 1000; index++) {
      const result = randomInRange(x, y);

      if (!(result >= x && result <= y)) {
        everyResultInRange = false;
      }
    }

    expect(everyResultInRange).toBe(true);
  });
});
