import { Ability } from "../../types";
import { getRacialModifiersAndRequirements } from "./getRacialModifiersAndRequirements";
import * as runRacialModifiersAndRequirementsPromptModule from "./runRacialModifiersAndRequirementsPrompt";

describe("getRacialModifiersAndRequirements", () => {
  it("should correctly return converted racial modifiers and log the choice", async () => {
    const input: Record<Ability, string> = {
      STR: "-2",
      DEX: "+2",
      CON: "1",
      WIS: "0",
      INT: "0",
      CHA: "0",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers } =
      await getRacialModifiersAndRequirements("race-adjusted");

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  STR: \x1b[36m-2\x1b[0m, DEX: \x1b[36m+2\x1b[0m, CON: \x1b[36m+1\x1b[0m\n",
    );

    expect(racialModifiers.STR).toEqual(-2);
    expect(racialModifiers.DEX).toEqual(2);
    expect(racialModifiers.CON).toEqual(1);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
  });

  it("should correctly return converted racial modifiers and log the choice when the user input is partially invalid", async () => {
    const input: Record<Ability, string> = {
      STR: "-2",
      DEX: "+2",
      CON: "1",
      WIS: "++1",
      INT: "abc",
      CHA: "//?",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers } =
      await getRacialModifiersAndRequirements("race-adjusted");

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith(
      "  STR: \x1b[36m-2\x1b[0m, DEX: \x1b[36m+2\x1b[0m, CON: \x1b[36m+1\x1b[0m\n",
    );

    expect(racialModifiers.STR).toEqual(-2);
    expect(racialModifiers.DEX).toEqual(2);
    expect(racialModifiers.CON).toEqual(1);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
  });

  it("should correctly return converted racial modifiers and requirements and log the choice", async () => {
    const input: Record<Ability, string> = {
      STR: "-2",
      DEX: "+2,9",
      CON: "1",
      WIS: "0",
      INT: "0,9",
      CHA: "0",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers, racialRequirements } =
      await getRacialModifiersAndRequirements("race-adjusted-constrained");

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(2);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  STR: \x1b[36m-2\x1b[0m, DEX: \x1b[36m+2\x1b[0m, CON: \x1b[36m+1\x1b[0m",
    );
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  Minimum DEX \x1b[36m9\x1b[0m, minimum INT \x1b[36m9\x1b[0m\n",
    );

    expect(racialModifiers.STR).toEqual(-2);
    expect(racialModifiers.DEX).toEqual(2);
    expect(racialModifiers.CON).toEqual(1);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
    expect(racialRequirements.STR).toEqual(0);
    expect(racialRequirements.DEX).toEqual(9);
    expect(racialRequirements.CON).toEqual(0);
    expect(racialRequirements.WIS).toEqual(0);
    expect(racialRequirements.INT).toEqual(9);
    expect(racialRequirements.CHA).toEqual(0);
  });

  it("should correctly return converted racial modifiers but no requirements (even if provided) and log the choice when the method is not constrained", async () => {
    const input: Record<Ability, string> = {
      STR: "-2",
      DEX: "+2,9",
      CON: "1",
      WIS: "0",
      INT: "0,9",
      CHA: "0",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers } =
      await getRacialModifiersAndRequirements("race-adjusted");

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  STR: \x1b[36m-2\x1b[0m, DEX: \x1b[36m+2\x1b[0m, CON: \x1b[36m+1\x1b[0m\n",
    );

    expect(racialModifiers.STR).toEqual(-2);
    expect(racialModifiers.DEX).toEqual(2);
    expect(racialModifiers.CON).toEqual(1);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
  });

  it("should correctly return converted racial modifiers but no requirements (even if provided) and log the choice when the method is constrained but racial modifiers are applied afterwards", async () => {
    const input: Record<Ability, string> = {
      STR: "-2",
      DEX: "+2,9",
      CON: "1",
      WIS: "0",
      INT: "0,9",
      CHA: "0",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers } = await getRacialModifiersAndRequirements(
      "race-adjusted-afterwards-constrained",
    );

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "  STR: \x1b[36m-2\x1b[0m, DEX: \x1b[36m+2\x1b[0m, CON: \x1b[36m+1\x1b[0m\n",
    );

    expect(racialModifiers.STR).toEqual(-2);
    expect(racialModifiers.DEX).toEqual(2);
    expect(racialModifiers.CON).toEqual(1);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
  });

  it("should correctly return converted racial modifiers and log that nothing was provided when every modifier is 0", async () => {
    const input: Record<Ability, string> = {
      STR: "0",
      DEX: "0",
      CON: "0",
      WIS: "0",
      INT: "0",
      CHA: "0",
    };
    const runRacialModifiersAndRequirementsPromptSpy = jest
      .spyOn(
        runRacialModifiersAndRequirementsPromptModule,
        "runRacialModifiersAndRequirementsPrompt",
      )
      .mockResolvedValueOnce(input);
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    const { racialModifiers } =
      await getRacialModifiersAndRequirements("race-adjusted");

    expect(runRacialModifiersAndRequirementsPromptSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenLastCalledWith("  No modifiers provided\n");

    expect(racialModifiers.STR).toEqual(0);
    expect(racialModifiers.DEX).toEqual(0);
    expect(racialModifiers.CON).toEqual(0);
    expect(racialModifiers.WIS).toEqual(0);
    expect(racialModifiers.INT).toEqual(0);
    expect(racialModifiers.CHA).toEqual(0);
  });
});
