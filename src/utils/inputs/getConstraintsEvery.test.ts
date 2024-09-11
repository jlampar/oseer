import { getConstraintsEvery } from "./getConstraintsEvery";
import * as runConstraintsEveryPromptModule from "./runConstraintsEveryPrompt";

describe("getConstraintsEvery", () => {
  it("should correctly return converted threshold and log the choice", async () => {
    const input: Record<string, string> = {
      threshold: "9",
    };
    const runConstraintsEveryPromptSpy = jest
      .spyOn(runConstraintsEveryPromptModule, "runConstraintsEveryPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsEvery();

    expect(runConstraintsEveryPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  If every score is \x1b[36m9\x1b[0m or lower, the set is re-rolled.\n",
    );

    expect(constraints.threshold).toEqual(9);
  });

  it("should correctly return converted constraints and log that nothing was provided when threshold is 0", async () => {
    const input: Record<string, string> = {
      threshold: "0",
    };
    const runConstraintsEveryPromptSpy = jest
      .spyOn(runConstraintsEveryPromptModule, "runConstraintsEveryPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsEvery();

    expect(runConstraintsEveryPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Nothing provided\n");

    expect(constraints.threshold).toEqual(0);
  });
});
