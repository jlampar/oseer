import { Class, DemiHumanClass } from "../../types";
import { getConstraintsClass } from "./getConstraintsClass";
import * as runConstraintsClassPromptModule from "./runConstraintsClassPrompt";

describe("getConstraintsClass", () => {
  it("should correctly return class that has no requirements converted to constraints and log the choice", async () => {
    const input: Class | DemiHumanClass = "fighter";
    const runConstraintsClassPromptSpy = jest
      .spyOn(runConstraintsClassPromptModule, "runConstraintsClassPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsClass("classic", "constrained");

    expect(runConstraintsClassPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Targeting \x1b[36mfighter\x1b[0m\n",
    );

    expect(constraints).toStrictEqual([
      {
        STR: 13,
        DEX: 0,
        CON: 0,
        WIS: 0,
        INT: 0,
        CHA: 0,
      },
      "fighter",
    ]);
  });

  it("should correctly return class that has requirements converted to constraints and log the choice", async () => {
    const input: Class | DemiHumanClass = "gnome";
    const runConstraintsClassPromptSpy = jest
      .spyOn(runConstraintsClassPromptModule, "runConstraintsClassPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraints = await getConstraintsClass("advanced", "constrained");

    expect(runConstraintsClassPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Targeting \x1b[36mgnome\x1b[0m\n",
    );

    expect(constraints).toStrictEqual([
      {
        STR: 0,
        DEX: 13,
        CON: 9,
        WIS: 0,
        INT: 13,
        CHA: 0,
      },
      "gnome",
    ]);
  });
});
