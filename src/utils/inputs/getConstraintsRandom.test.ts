import { getConstraintsRandom } from "./getConstraintsRandom";
import * as runConstraintsRandomPromptModule from "./runConstraintsRandomPrompt";

describe("getConstraintsRandom", () => {
  it("should correctly return converted constraints and log the choice", async () => {
    const input: Record<string, string> = {
      numberOfScores: "2",
      threshold: "14",
    };
    const runConstraintsRandomPromptSpy = jest
      .spyOn(runConstraintsRandomPromptModule, "runConstraintsRandomPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsRandom();

    expect(runConstraintsRandomPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  At least \x1b[36m2\x1b[0m scores must be no less than \x1b[36m14\x1b[0m\n",
    );

    expect(constraints.numberOfScores).toEqual(2);
    expect(constraints.threshold).toEqual(14);
  });

  it("should correctly return converted constraints and log that nothing was provided when every constraint is 0", async () => {
    const input: Record<string, string> = {
      numberOfScores: "0",
      threshold: "0",
    };
    const runConstraintsRandomPromptSpy = jest
      .spyOn(runConstraintsRandomPromptModule, "runConstraintsRandomPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsRandom();

    expect(runConstraintsRandomPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Nothing provided\n");

    expect(constraints.numberOfScores).toEqual(0);
    expect(constraints.threshold).toEqual(0);
  });

  it("should correctly return converted constraints and log that nothing was provided when at least one of the constraints is 0", async () => {
    const input: Record<string, string> = {
      numberOfScores: "2",
      threshold: "0",
    };
    const runConstraintsRandomPromptSpy = jest
      .spyOn(runConstraintsRandomPromptModule, "runConstraintsRandomPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsRandom();

    expect(runConstraintsRandomPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Nothing provided\n");

    expect(constraints.numberOfScores).toEqual(2);
    expect(constraints.threshold).toEqual(0);
  });
});
