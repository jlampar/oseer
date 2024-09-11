import { renderResult } from "./renderResult";
import { ZERO_VALUES } from "./const";
import { Ability, RollResult } from "../types";

const renderIntermediateResultMock = jest.fn();
jest.mock("./result/renderIntermediateResult", () => ({
  renderIntermediateResult: () => renderIntermediateResultMock(),
}));

const getRacialModifiersAndRequirementsMock = jest.fn();
jest.mock("./inputs/getRacialModifiersAndRequirements", () => ({
  getRacialModifiersAndRequirements: () =>
    getRacialModifiersAndRequirementsMock(),
}));

const addRacialModifiersMock = jest.fn();
jest.mock("./addRacialModifiers", () => ({
  addRacialModifiers: () => addRacialModifiersMock(),
}));

const rollAbilityScoresMock = jest.fn();
jest.mock("./rollAbilityScores", () => ({
  rollAbilityScores: () => rollAbilityScoresMock(),
}));

const renderFinalResultMock = jest.fn();
jest.mock("./result/renderFinalResult", () => ({
  renderFinalResult: () => renderFinalResultMock(),
}));

describe("renderResult", () => {
  const mockAbilityScores: Record<Ability, RollResult> = {
    STR: [1, 2, 3, 6],
    DEX: [4, 5, 6, 15],
    CON: [1, 3, 5, 9],
    WIS: [2, 4, 6, 12],
    INT: [1, 2, 6, 9],
    CHA: [3, 4, 5, 12],
  };
  it("should render intermediate result and ask for racial modifiers for method race adjusted afterwards", async () => {
    getRacialModifiersAndRequirementsMock.mockResolvedValueOnce({
      racialModifiers: ZERO_VALUES,
      racialRequirements: ZERO_VALUES,
    });

    await renderResult(
      "classic",
      "race-adjusted-afterwards",
      false,
      null,
      mockAbilityScores,
    );

    expect(renderIntermediateResultMock).toHaveBeenCalled();
    expect(getRacialModifiersAndRequirementsMock).toHaveBeenCalled();
    expect(addRacialModifiersMock).toHaveBeenCalled();
    expect(renderFinalResultMock).toHaveBeenCalled();
  });

  it("should just add racial modifiers and render final result for any other method", async () => {
    await renderResult("classic", "simple", false, null, mockAbilityScores);

    expect(renderIntermediateResultMock).not.toHaveBeenCalled();
    expect(getRacialModifiersAndRequirementsMock).not.toHaveBeenCalled();
    expect(addRacialModifiersMock).toHaveBeenCalled();
    expect(renderFinalResultMock).toHaveBeenCalled();
  });
});
