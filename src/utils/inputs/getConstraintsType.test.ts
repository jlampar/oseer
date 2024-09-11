import { ZERO_VALUES } from "./../const/ZERO_VALUES";
import { ConstraintsType } from "../../types";
import { getConstraintsType } from "./getConstraintsType";
import * as runConstraintTypePromptModule from "./runConstraintTypePrompt";

describe("getConstraintsType", () => {
  it("should correctly return constraints type for type 'random' and log the choice", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("random"));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType(undefined, ZERO_VALUES);

    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  At least X scores should be no less than Y\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("random");
  });

  it("should correctly return constraints type for type 'fixed' and log the choice", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("fixed"));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType(undefined, ZERO_VALUES);

    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Selected scores should be no less than the given target values\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("fixed");
  });

  it("should correctly return constraints type for type 'every' and log the choice", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("every"));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType(undefined, ZERO_VALUES);

    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Discard sets that have every score less than or equal to X\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("every");
  });

  it("should correctly return constraints type for type 'class' and log the choice", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("class"));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType(undefined, ZERO_VALUES);

    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Scores should be enough to have a positive PRM for a selected class\n",
    );

    expect(constraintsType).toEqual("class");
  });

  it("should correctly return constraints type for type 'none' and log the choice", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("none"));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType(undefined, ZERO_VALUES);

    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  None (just racial requirements)\n",
    );

    expect(constraintsType).toEqual("none");
  });

  it("should correctly return constraints type for type 'fixed' and log the choice if provided with it as a default value", async () => {
    const runConstraintTypePromptSpy = jest.spyOn(
      runConstraintTypePromptModule,
      "runConstraintTypePrompt",
    );
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType("fixed", ZERO_VALUES);

    expect(runConstraintTypePromptSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a constraints type\x1b[0m \x1b[2m·\x1b[0m \x1b[36mfixed\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Selected scores should be no less than the given target values\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("fixed");
  });

  it("should correctly return constraints type for type 'random' and log the choice if provided with it as a default value", async () => {
    const runConstraintTypePromptSpy = jest.spyOn(
      runConstraintTypePromptModule,
      "runConstraintTypePrompt",
    );
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType("random", ZERO_VALUES);

    expect(runConstraintTypePromptSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a constraints type\x1b[0m \x1b[2m·\x1b[0m \x1b[36mrandom\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  At least X scores should be no less than Y\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("random");
  });

  it("should correctly return constraints type for type 'every' and log the choice if provided with it as a default value", async () => {
    const runConstraintTypePromptSpy = jest.spyOn(
      runConstraintTypePromptModule,
      "runConstraintTypePrompt",
    );
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType("every", ZERO_VALUES);

    expect(runConstraintTypePromptSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(3);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a constraints type\x1b[0m \x1b[2m·\x1b[0m \x1b[36mevery\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Discard sets that have every score less than or equal to X\n",
    );
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  \x1b[31mPlease remember that excessively strict constraints may result in re-rolls taking a significant amount of time!\n\x1b[0m",
    );

    expect(constraintsType).toEqual("every");
  });

  it("should correctly return constraints type for type 'class' and log the choice if provided with it as a default value", async () => {
    const runConstraintTypePromptSpy = jest.spyOn(
      runConstraintTypePromptModule,
      "runConstraintTypePrompt",
    );
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType("class", ZERO_VALUES);

    expect(runConstraintTypePromptSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a constraints type\x1b[0m \x1b[2m·\x1b[0m \x1b[36mclass\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Scores should be enough to have a positive PRM for a selected class\n",
    );

    expect(constraintsType).toEqual("class");
  });

  it("should correctly return constraints type for type 'none' and log the choice if provided with it as a default value", async () => {
    const runConstraintTypePromptSpy = jest.spyOn(
      runConstraintTypePromptModule,
      "runConstraintTypePrompt",
    );
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const constraintsType = await getConstraintsType("none", ZERO_VALUES);

    expect(runConstraintTypePromptSpy).not.toHaveBeenCalled();
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      `\x1b[32m✔\x1b[0m \x1b[1mPick a constraints type\x1b[0m \x1b[2m·\x1b[0m \x1b[36mnone\x1b[0m`,
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  None (just racial requirements)\n",
    );

    expect(constraintsType).toEqual("none");
  });

  it("should throw an error when given unsupported constraints type", async () => {
    const runConstraintTypePromptSpy = jest
      .spyOn(runConstraintTypePromptModule, "runConstraintTypePrompt")
      .mockImplementation(() => Promise.resolve("lorem" as ConstraintsType));
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    await expect(getConstraintsType(undefined, ZERO_VALUES)).rejects.toThrow(
      "Unexisiting constraint type: lorem",
    );
    expect(runConstraintTypePromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).not.toHaveBeenCalled();
  });
});
