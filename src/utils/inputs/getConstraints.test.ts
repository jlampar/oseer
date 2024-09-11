import { ConstraintsType } from "../../types";
import { getConstraints } from "./getConstraints";
import * as getConstraintsFixedModule from "./getConstraintsFixed";
import * as getConstraintsClassModule from "./getConstraintsClass";
import * as getConstraintsRandomModule from "./getConstraintsRandom";
import * as getConstraintsEveryModule from "./getConstraintsEvery";
import * as isUnreachableConstraintsModule from "../constraints/isUnreachableConstraints";
import { ZERO_VALUES } from "../const";

describe("getConstraints", () => {
  it("should launch getConstraintsFixed when given constrainst 'fixed'", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));
    const isUnreachableConstraintsSpy = jest
      .spyOn(isUnreachableConstraintsModule, "isUnreachableConstraints")
      .mockImplementation(() => false);

    await getConstraints(
      "classic",
      "simple",
      "fixed",
      ZERO_VALUES,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsSpy).toHaveBeenCalled();
    expect(getConstraintsFixedSpy).toHaveBeenCalledTimes(1);
    expect(getConstraintsClassSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(getConstraintsEverySpy).not.toHaveBeenCalled();
  });

  it("should launch getConstraintsClass when given constrainst 'class'", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));
    const isUnreachableConstraintsSpy = jest
      .spyOn(isUnreachableConstraintsModule, "isUnreachableConstraints")
      .mockImplementation(() => false);

    await getConstraints(
      "classic",
      "simple",
      "class",
      ZERO_VALUES,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsSpy).toHaveBeenCalled();
    expect(getConstraintsClassSpy).toHaveBeenCalledTimes(1);
    expect(getConstraintsFixedSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(getConstraintsEverySpy).not.toHaveBeenCalled();
  });

  it("should launch getConstraintsRandom when given constrainst 'random'", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));
    const isUnreachableConstraintsSpy = jest
      .spyOn(isUnreachableConstraintsModule, "isUnreachableConstraints")
      .mockImplementation(() => false);

    await getConstraints(
      "classic",
      "simple",
      "random",
      ZERO_VALUES,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsSpy).toHaveBeenCalled();
    expect(getConstraintsFixedSpy).not.toHaveBeenCalled();
    expect(getConstraintsClassSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).toHaveBeenCalledTimes(1);
    expect(getConstraintsEverySpy).not.toHaveBeenCalled();
  });

  it("should launch getConstraintsEvery when given constrainst 'every'", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));
    const isUnreachableConstraintsSpy = jest
      .spyOn(isUnreachableConstraintsModule, "isUnreachableConstraints")
      .mockImplementation(() => false);

    await getConstraints(
      "classic",
      "simple",
      "every",
      ZERO_VALUES,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsSpy).toHaveBeenCalled();
    expect(getConstraintsFixedSpy).not.toHaveBeenCalled();
    expect(getConstraintsClassSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(getConstraintsEverySpy).toHaveBeenCalledTimes(1);
  });

  it("should return ZERO_VALUES when given constrainst 'none'", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));
    const isUnreachableConstraintsSpy = jest
      .spyOn(isUnreachableConstraintsModule, "isUnreachableConstraints")
      .mockImplementation(() => false);

    const result = await getConstraints(
      "classic",
      "simple",
      "none",
      ZERO_VALUES,
      ZERO_VALUES,
    );

    expect(isUnreachableConstraintsSpy).toHaveBeenCalled();
    expect(getConstraintsFixedSpy).not.toHaveBeenCalled();
    expect(getConstraintsClassSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(getConstraintsEverySpy).not.toHaveBeenCalled();
    expect(result).toStrictEqual([ZERO_VALUES, null]);
  });

  it("should throw an error when given unsupported constraint", async () => {
    const getConstraintsFixedSpy = jest
      .spyOn(getConstraintsFixedModule, "getConstraintsFixed")
      .mockImplementation(() =>
        Promise.resolve({ STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 }),
      );
    const getConstraintsClassSpy = jest
      .spyOn(getConstraintsClassModule, "getConstraintsClass")
      .mockImplementation(() =>
        Promise.resolve([
          { STR: 0, DEX: 0, CON: 0, WIS: 0, INT: 0, CHA: 0 },
          "fighter",
        ]),
      );
    const getConstraintsRandomSpy = jest
      .spyOn(getConstraintsRandomModule, "getConstraintsRandom")
      .mockImplementation(() =>
        Promise.resolve({ numberOfScores: 0, threshold: 0 }),
      );
    const getConstraintsEverySpy = jest
      .spyOn(getConstraintsEveryModule, "getConstraintsEvery")
      .mockImplementation(() => Promise.resolve({ threshold: 0 }));

    await expect(
      getConstraints(
        "classic",
        "simple",
        "lorem" as ConstraintsType,
        ZERO_VALUES,
        ZERO_VALUES,
      ),
    ).rejects.toThrow("Unsupported constraints type");
    expect(getConstraintsFixedSpy).not.toHaveBeenCalled();
    expect(getConstraintsClassSpy).not.toHaveBeenCalled();
    expect(getConstraintsRandomSpy).not.toHaveBeenCalled();
    expect(getConstraintsEverySpy).not.toHaveBeenCalled();
  });
});
