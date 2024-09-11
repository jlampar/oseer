import { Ability } from "../../types";
import { getScoresToAnalyze } from "./getScoresToAnalyze";
import * as runScoresToAnalyzePromptModule from "./runScoresToAnalyzePrompt";

describe("getScoresToAnalyze", () => {
  it("should correctly return converted scores and log the choice", async () => {
    const input: Record<Ability, string> = {
      STR: "13",
      DEX: "10",
      CON: "18",
      WIS: "9",
      INT: "0",
      CHA: "12",
    };
    const runScoresToAnalyzePromptSpy = jest
      .spyOn(runScoresToAnalyzePromptModule, "runScoresToAnalyzePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getScoresToAnalyze();

    expect(runScoresToAnalyzePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  STR \x1b[36m13\x1b[0m, DEX \x1b[36m10\x1b[0m, CON \x1b[36m18\x1b[0m, WIS \x1b[36m9\x1b[0m, INT \x1b[36m3\x1b[0m, CHA \x1b[36m12\x1b[0m\n",
    );

    expect(constraints.STR).toEqual(13);
    expect(constraints.DEX).toEqual(10);
    expect(constraints.CON).toEqual(18);
    expect(constraints.WIS).toEqual(9);
    expect(constraints.INT).toEqual(3);
    expect(constraints.CHA).toEqual(12);
  });
});
