import { Source } from "../../types";
import { getSource } from "./getSource";
import * as runSourcePromptModule from "./runSourcePrompt";

describe("getSource", () => {
  it("should correctly return classic configs for classic source", async () => {
    const input: Source = "classic";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(undefined);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Classic Fantasy\n");

    expect(source).toBe(input);
  });

  it("should correctly return classic configs for classic source if provided with it as a default value", async () => {
    const input: Source = "classic";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(input);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a source\x1b[0m \x1b[2m·\x1b[0m \x1b[36mclassic\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("  Classic Fantasy\n");

    expect(source).toBe(input);
  });

  it("should correctly return advanced configs for advanced source", async () => {
    const input: Source = "advanced";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(undefined);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Advanced Fantasy\n");

    expect(source).toBe(input);
  });

  it("should correctly return advanced configs for advanced source if provided with it as a default value", async () => {
    const input: Source = "advanced";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(input);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a source\x1b[0m \x1b[2m·\x1b[0m \x1b[36madvanced\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("  Advanced Fantasy\n");

    expect(source).toBe(input);
  });

  it("should correctly return advancedWithCarcassCrawler configs for advancedWithCarcassCrawler source", async () => {
    const input: Source = "advanced-with-carcass-crawler";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(undefined);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Advanced Fantasy + Carcass Crawler\n",
    );

    expect(source).toBe(input);
  });

  it("should correctly return advanced-with-carcass-crawler for advanced source if provided with it as a default value", async () => {
    const input: Source = "advanced-with-carcass-crawler";
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const source = await getSource(input);

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a source\x1b[0m \x1b[2m·\x1b[0m \x1b[36madvanced-with-carcass-crawler\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Advanced Fantasy + Carcass Crawler\n",
    );

    expect(source).toBe(input);
  });

  it("should throw an error when supplied with unexisiting source", async () => {
    const input: Source = "lorem" as Source;
    const runSourcePromptSpy = jest
      .spyOn(runSourcePromptModule, "runSourcePrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(runSourcePromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(0);
    await expect(getSource(input)).rejects.toThrow(`Unexisiting source: lorem`);
  });
});
