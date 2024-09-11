import { Ability } from "../../types";
import { getConstraintsFixed } from "./getConstraintsFixed";
import * as runConstraintsPromptModule from "./runConstraintsFixedPrompt";

describe("getConstraintsFixed", () => {
  it("should correctly return converted constraints and log the choice", async () => {
    const input: Record<Ability, string> = {
      STR: "13",
      DEX: "10",
      CON: "0",
      WIS: "0",
      INT: "0",
      CHA: "0",
    };
    const runConstraintsPromptSpy = jest
      .spyOn(runConstraintsPromptModule, "runConstraintsFixedPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsFixed();

    expect(runConstraintsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Minimum STR \x1b[36m13\x1b[0m, minimum DEX \x1b[36m10\x1b[0m\n",
    );

    expect(constraints.STR).toEqual(13);
    expect(constraints.DEX).toEqual(10);
    expect(constraints.CON).toEqual(0);
    expect(constraints.WIS).toEqual(0);
    expect(constraints.INT).toEqual(0);
    expect(constraints.CHA).toEqual(0);
  });

  it("should correctly return converted constraints and log that nothing was provided when every constraint is 0", async () => {
    const input: Record<Ability, string> = {
      STR: "0",
      DEX: "0",
      CON: "0",
      WIS: "0",
      INT: "0",
      CHA: "0",
    };
    const runConstraintsPromptSpy = jest
      .spyOn(runConstraintsPromptModule, "runConstraintsFixedPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsFixed();

    expect(runConstraintsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Nothing provided\n");

    expect(constraints.STR).toEqual(0);
    expect(constraints.DEX).toEqual(0);
    expect(constraints.CON).toEqual(0);
    expect(constraints.WIS).toEqual(0);
    expect(constraints.INT).toEqual(0);
    expect(constraints.CHA).toEqual(0);
  });
});
