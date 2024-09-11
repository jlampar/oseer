import {
  advancedClassesConfig,
  advancedDemiHumanClassesConfig,
  advancedWithCarcassCrawlerClassesConfig,
  advancedWithCarcassCrawlerDemiHumanClassesConfig,
  classicClassesConfig,
  classicDemiHumanClassesConfig,
} from "../config";
import { Source } from "../types";
import { getConfigs } from "./getConfigs";

describe("getConfigs", () => {
  it("should correctly return classic configs for classic source", () => {
    const configs = getConfigs("classic");

    expect(configs[0]).toStrictEqual(classicClassesConfig);
    expect(configs[1]).toStrictEqual(classicDemiHumanClassesConfig);
  });

  it("should correctly return advanced configs for advanced source", () => {
    const configs = getConfigs("advanced");

    expect(configs[0]).toStrictEqual(advancedClassesConfig);
    expect(configs[1]).toStrictEqual(advancedDemiHumanClassesConfig);
  });

  it("should correctly return advancedWithCarcassCrawler configs for advancedWithCarcassCrawler source", () => {
    const configs = getConfigs("advanced-with-carcass-crawler");

    expect(configs[0]).toStrictEqual(advancedWithCarcassCrawlerClassesConfig);
    expect(configs[1]).toStrictEqual(
      advancedWithCarcassCrawlerDemiHumanClassesConfig,
    );
  });

  it("should throw an error when supplied with unexisiting source", () => {
    expect(() => {
      expect(getConfigs("lorem" as Source));
    }).toThrow("Unexisiting source: lorem");
  });
});
