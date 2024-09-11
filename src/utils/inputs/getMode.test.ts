import { Mode } from "../../types";
import { getMode } from "./getMode";
import * as runModePromptModule from "./runModePrompt";

describe("getMode", () => {
  it("should correctly return roll mode and log the choice", async () => {
    const input: Mode = "roll";
    const runModePromptSpy = jest
      .spyOn(runModePromptModule, "runModePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const mode = await getMode(undefined);

    expect(runModePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Roll\n");

    expect(mode).toEqual("roll");
  });

  it("should correctly return analyze mode and log the choice", async () => {
    const input: Mode = "analyze";
    const runModePromptSpy = jest
      .spyOn(runModePromptModule, "runModePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const mode = await getMode(undefined);

    expect(runModePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Analyze\n");

    expect(mode).toEqual("analyze");
  });

  it("should correctly return roll mode and log the choice if provided with it as a default value", async () => {
    const input: Mode = "roll";
    const runModePromptSpy = jest
      .spyOn(runModePromptModule, "runModePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const mode = await getMode(input);

    expect(runModePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a mode\x1b[0m \x1b[2m·\x1b[0m \x1b[36mroll\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Roll\n");

    expect(mode).toEqual("roll");
  });

  it("should correctly return analyze mode and log the choice if provided with it as a default value", async () => {
    const input: Mode = "analyze";
    const runModePromptSpy = jest
      .spyOn(runModePromptModule, "runModePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const mode = await getMode(input);

    expect(runModePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a mode\x1b[0m \x1b[2m·\x1b[0m \x1b[36manalyze\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Analyze\n");

    expect(mode).toEqual("analyze");
  });

  it("should throw an error when supplied with unexisiting method", async () => {
    const input: Mode = "lorem" as Mode;
    const runModePromptSpy = jest
      .spyOn(runModePromptModule, "runModePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(runModePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(0);
    await expect(getMode(input)).rejects.toThrow(`Unexisiting mode: lorem`);
  });
});
