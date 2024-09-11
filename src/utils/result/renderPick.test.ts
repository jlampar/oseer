import { Class, DemiHumanClass } from "../../types";
import { renderPick } from "./renderPick";

describe("renderPick", () => {
  const bestClasses: Array<Class> = ["magic-user", "cleric"];
  const bestDemiHumanClasses: Array<DemiHumanClass> = ["dragonborn", "drow"];
  const goodClasses: Array<Class> = ["acolyte", "acrobat"];
  const goodDemiHumanClasses: Array<DemiHumanClass> = ["duergar", "dwarf"];
  const availableClasses: Array<Class> = ["barbarian", "fighter"];
  const availableDemiHumanClasses: Array<DemiHumanClass> = [
    "hephaestan",
    "mutoid",
  ];

  it("should correctly pick from best classes", () => {
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderPick(
      bestClasses,
      bestDemiHumanClasses,
      goodClasses,
      goodDemiHumanClasses,
      availableClasses,
      availableDemiHumanClasses,
      null,
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringMatching(
        /The prophecy is true, you will be .*(cleric|magic-user)|Be a paragon of your own kind, .*(dragonborn|drow)/g,
      ),
    );
  });

  it("should correctly pick from good classes", () => {
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderPick(
      [],
      [],
      goodClasses,
      goodDemiHumanClasses,
      availableClasses,
      availableDemiHumanClasses,
      null,
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringMatching(
        /Your fate is clear, walk the path of .*(acolyte|acrobat)|Follow the ways of your lineage, .*(duergar|dwarf)/g,
      ),
    );
  });

  it("should correctly pick from available classes", () => {
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderPick(
      [],
      [],
      [],
      [],
      availableClasses,
      availableDemiHumanClasses,
      null,
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringMatching(
        /You're doomed to become .*(barbarian|fighter)|You're doomed to stay just .*(hephaestan|mutoid)/g,
      ),
    );
  });

  it("should correctly pick target class", () => {
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderPick(
      [],
      [],
      [],
      [],
      availableClasses,
      availableDemiHumanClasses,
      "barbarian",
    );

    expect(consoleLogSpy).toHaveBeenCalledWith(
      expect.stringMatching(/You're doomed to become .*barbarian/g),
    );
  });
});
