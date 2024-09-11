import { RollResult } from "../../types";
import { renderRow } from "./renderRow";

describe("renderRow", () => {
  it("should correctly render STR row for a given score", () => {
    const score: [string, RollResult] = ["STR", [1, 1, 1, 3]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  STR:  \x1b[36m3\x1b[0m  (⚀⚀⚀)  -20%  Melee: \x1b[36m%s\x1b[0m, Open Doors: \x1b[36m%s\x1b[0m",
      "-3",
      "1-in-6",
    );
  });

  it("should correctly render DEX row for a given score", () => {
    const score: [string, RollResult] = ["DEX", [2, 2, 1, 5]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  DEX:  \x1b[36m5\x1b[0m  (⚁⚁⚀)  -20%  AC: \x1b[36m%s\x1b[0m, Missile: \x1b[36m%s\x1b[0m, Initiative: \x1b[36m%s\x1b[0m",
      "-2",
      "-2",
      "-1",
    );
  });

  it("should correctly render CON row for a given score", () => {
    const score: [string, RollResult] = ["CON", [2, 2, 3, 7]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  CON:  \x1b[36m7\x1b[0m  (⚁⚁⚂)  -10%  Hit Points: \x1b[36m%s\x1b[0m",
      "-1",
    );
  });

  it("should correctly render WIS row for a given score", () => {
    const score: [string, RollResult] = ["WIS", [2, 2, 6, 10]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  WIS:  \x1b[36m10\x1b[0m (⚁⚁⚅)        ",
    );
  });

  it("should correctly render INT row for a given score", () => {
    const score: [string, RollResult] = ["INT", [2, 6, 6, 14]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  INT:  \x1b[36m14\x1b[0m (⚁⚅⚅)  +5%   Spoken Languages: \x1b[36mNative%s\x1b[0m, Literacy: \x1b[36m%s\x1b[0m",
      " + 1 additional",
      "Literate",
    );
  });

  it("should correctly render CHA row for a given score", () => {
    const score: [string, RollResult] = ["CHA", [5, 6, 6, 17]];

    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderRow(score);

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  CHA:  \x1b[36m17\x1b[0m (⚄⚅⚅)  +10%  NPC Reactions: \x1b[36m%s\x1b[0m, Retainers Max #: \x1b[36m%s\x1b[0m, Retainers Loyalty: \x1b[36m%s\x1b[0m",
      "+1",
      "6",
      "9",
    );
  });
});
