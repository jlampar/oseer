import { Method } from "../types";
import { ZERO_VALUES } from "./const";
import { getRacialData } from "./getRacialData";
import * as getRacialModifiersAndRequirementsModule from "./inputs/getRacialModifiersAndRequirements";

describe("getRacialData", () => {
  it("should ask for racial data if method is racial", async () => {
    const method: Method = "race-adjusted";
    const racialModifiers = {
      STR: 1,
      DEX: -1,
      CON: 0,
      WIS: 0,
      INT: 0,
      CHA: 0,
    };
    const racialRequirements = {
      STR: 0,
      DEX: 0,
      CON: 0,
      WIS: 0,
      INT: 9,
      CHA: 0,
    };
    const getRacialModifiersAndRequirementsSpy = jest
      .spyOn(
        getRacialModifiersAndRequirementsModule,
        "getRacialModifiersAndRequirements",
      )
      .mockResolvedValueOnce({ racialModifiers, racialRequirements });

    const racialData = await getRacialData(method);

    expect(getRacialModifiersAndRequirementsSpy).toHaveBeenCalled();
    expect(racialData.racialModifiers).toStrictEqual(racialModifiers);
    expect(racialData.racialRequirements).toStrictEqual(racialRequirements);
  });

  it("should return null racial data if method is not racial", async () => {
    const method: Method = "simple";
    const getRacialModifiersAndRequirementsSpy = jest.spyOn(
      getRacialModifiersAndRequirementsModule,
      "getRacialModifiersAndRequirements",
    );

    const racialData = await getRacialData(method);

    expect(getRacialModifiersAndRequirementsSpy).not.toHaveBeenCalled();
    expect(racialData.racialModifiers).toStrictEqual(ZERO_VALUES);
    expect(racialData.racialRequirements).toStrictEqual(ZERO_VALUES);
  });
});
