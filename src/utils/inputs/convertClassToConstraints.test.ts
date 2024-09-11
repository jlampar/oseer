import {
  advancedClassesConfig,
  advancedDemiHumanClassesConfig,
  classicClassesConfig,
  classicDemiHumanClassesConfig,
} from "../../config";
import { Class, DemiHumanClass } from "../../types";
import { convertClassToConstraints } from "./convertClassToConstraints";

describe("convertClassToConstraints", () => {
  it("should correctly convert class that has no requirements to constraints", () => {
    const input: Class | DemiHumanClass = "fighter";

    const converted = convertClassToConstraints(
      input,
      classicClassesConfig,
      classicDemiHumanClassesConfig,
    );

    expect(converted.STR).toBe(13);
    expect(converted.DEX).toBe(0);
    expect(converted.CON).toBe(0);
    expect(converted.WIS).toBe(0);
    expect(converted.INT).toBe(0);
    expect(converted.CHA).toBe(0);
  });

  it("should correctly convert class that has requirements to constraints", () => {
    const input: Class | DemiHumanClass = "gnome";

    const converted = convertClassToConstraints(
      input,
      advancedClassesConfig,
      advancedDemiHumanClassesConfig,
    );

    expect(converted.STR).toBe(0);
    expect(converted.DEX).toBe(13);
    expect(converted.CON).toBe(9);
    expect(converted.WIS).toBe(0);
    expect(converted.INT).toBe(13);
    expect(converted.CHA).toBe(0);
  });
});
