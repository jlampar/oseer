import { reRollAbilityScores } from "./reRollAbilityScores";
import { ZERO_VALUES } from "./const";
import { requirementMet } from "./constraints";

const requirementMetForConstraintsEveryMock = jest.fn();
jest.mock("./constraints/requirementMetForConstraintsEvery", () => ({
  requirementMetForConstraintsEvery: () =>
    requirementMetForConstraintsEveryMock(),
}));

const renderResultMock = jest.fn();
jest.mock("./renderResult", () => ({
  renderResult: () => renderResultMock(),
}));

const rollAbilityScoresMock = jest.fn();
jest.mock("./rollAbilityScores", () => ({
  rollAbilityScores: () => rollAbilityScoresMock(),
}));

describe("reRollAbilityScores", () => {
  it("should return renderResult when the requirement is met", async () => {
    requirementMetForConstraintsEveryMock.mockReturnValueOnce(true);

    await reRollAbilityScores(
      "classic",
      "simple",
      false,
      null,
      ZERO_VALUES,
      requirementMet().basic,
      [
        {
          threshold: 3,
        },
        "every",
        ZERO_VALUES,
      ],
    );

    expect(rollAbilityScoresMock).toHaveBeenCalled();
    expect(renderResultMock).toHaveBeenCalled();
  });

  it("should not return renderResult when the requirement is met but re-launch itself in setTimeout", async () => {
    const setTimeoutSpy = jest
      .spyOn(global, "setTimeout")
      .mockImplementationOnce((_callback) => setTimeout(() => {}, 0));
    requirementMetForConstraintsEveryMock.mockReturnValueOnce(false);

    await reRollAbilityScores(
      "classic",
      "simple",
      false,
      null,
      ZERO_VALUES,
      requirementMet().basic,
      [
        {
          threshold: 3,
        },
        "every",
        ZERO_VALUES,
      ],
    );

    expect(rollAbilityScoresMock).toHaveBeenCalled();
    expect(setTimeoutSpy).toHaveBeenCalled();
    expect(renderResultMock).not.toHaveBeenCalled();
  });
});
