import { Method } from "../../types";
import { getMethod } from "./getMethod";
import * as runMethodPromptModule from "./runMethodPrompt";

describe("getMethod", () => {
  it("should correctly return simple method and log the choice", async () => {
    const input: Method = "simple";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  Roll 3d6 DTL\n");

    expect(method).toEqual("simple");
  });

  it("should correctly return simple method and log the choice if provided with it as a default value", async () => {
    const input: Method = "simple";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36msimple\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith("  Roll 3d6 DTL\n");

    expect(method).toEqual("simple");
  });

  it("should correctly return race-adjusted method and log the choice", async () => {
    const input: Method = "race-adjusted";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Apply racial modifiers, then roll 3d6 DTL\n",
    );

    expect(method).toEqual("race-adjusted");
  });

  it("should correctly return race-adjusted method and log the choice if provided with it as a default value", async () => {
    const input: Method = "race-adjusted";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36mrace-adjusted\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Apply racial modifiers, then roll 3d6 DTL\n",
    );

    expect(method).toEqual("race-adjusted");
  });

  it("should correctly return race-adjusted-afterwards method and log the choice", async () => {
    const input: Method = "race-adjusted-afterwards";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Roll 3d6 DTL, then apply racial modifiers\n",
    );

    expect(method).toEqual("race-adjusted-afterwards");
  });

  it("should correctly return race-adjusted-afterwards method and log the choice if provided with it as a default value", async () => {
    const input: Method = "race-adjusted-afterwards";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36mrace-adjusted-afterwards\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Roll 3d6 DTL, then apply racial modifiers\n",
    );

    expect(method).toEqual("race-adjusted-afterwards");
  });

  it("should correctly return constrained method and log the choice", async () => {
    const input: Method = "constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Re-roll 3d6 DTL with constraints\n",
    );

    expect(method).toEqual("constrained");
  });

  it("should correctly return constrained method and log the choice if provided with it as a default value", async () => {
    const input: Method = "constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36mconstrained\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Re-roll 3d6 DTL with constraints\n",
    );

    expect(method).toEqual("constrained");
  });

  it("should correctly return race-adjusted-constrained method and log the choice", async () => {
    const input: Method = "race-adjusted-constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Apply racial modifiers, then re-roll 3d6 DTL with constraints\n",
    );

    expect(method).toEqual("race-adjusted-constrained");
  });

  it("should correctly return race-adjusted-constrained method and log the choice if provided with it as a default value", async () => {
    const input: Method = "race-adjusted-constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36mrace-adjusted-constrained\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Apply racial modifiers, then re-roll 3d6 DTL with constraints\n",
    );

    expect(method).toEqual("race-adjusted-constrained");
  });

  it("should correctly return race-adjusted-afterwards-constrained method and log the choice", async () => {
    const input: Method = "race-adjusted-afterwards-constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(undefined);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  Re-roll 3d6 DTL with constraints, then apply racial modifiers\n",
    );

    expect(method).toEqual("race-adjusted-afterwards-constrained");
  });

  it("should correctly return race-adjusted-afterwards-constrained method and log the choice if provided with it as a default value", async () => {
    const input: Method = "race-adjusted-afterwards-constrained";
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const method = await getMethod(input);

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a method\x1b[0m \x1b[2m·\x1b[0m \x1b[36mrace-adjusted-afterwards-constrained\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Re-roll 3d6 DTL with constraints, then apply racial modifiers\n",
    );

    expect(method).toEqual("race-adjusted-afterwards-constrained");
  });

  it("should throw an error when supplied with unexisiting method", async () => {
    const input: Method = "lorem" as Method;
    const runMethodPromptSpy = jest
      .spyOn(runMethodPromptModule, "runMethodPrompt")
      .mockImplementation(() => Promise.resolve(input));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    expect(runMethodPromptSpy).toHaveBeenCalledTimes(0);
    expect(consoleLogSpy).toHaveBeenCalledTimes(0);
    await expect(getMethod(input)).rejects.toThrow(`Unexisiting method: lorem`);
  });
});
