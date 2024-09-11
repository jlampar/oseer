#!/usr/bin/env node
import {
  Argv,
  Class,
  Constraints,
  ConstraintsType,
  DemiHumanClass,
  Method,
  Mode,
} from "./types";
import {
  rollAbilityScores,
  getConstraints,
  getMethod,
  createYargsParser,
  getSource,
  getMode,
  getScoresToAnalyze,
  assignAllAbilityScores,
  renderResult,
  getConstraintsType,
  getRacialData,
  reRoll,
  getShouldPick,
} from "./utils";

const parser = createYargsParser();

(async () => {
  const argv: Argv = await parser.parse();

  const pick = await getShouldPick(argv.pick);
  const source = await getSource(argv.source);
  const mode: Mode = await getMode(argv.mode);

  if (mode === "analyze") {
    return renderResult(
      source,
      "simple",
      pick,
      null,
      assignAllAbilityScores(await getScoresToAnalyze()),
    );
  }

  const method: Method = await getMethod(argv.method);
  const { racialModifiers, racialRequirements } = await getRacialData(method);

  if (
    method === "constrained" ||
    method === "race-adjusted-constrained" ||
    method === "race-adjusted-afterwards-constrained"
  ) {
    const constraintsType: ConstraintsType = await getConstraintsType(
      argv["constraints-type"],
      racialRequirements,
    );
    const [constraints, targetClass]: [
      Constraints,
      Class | DemiHumanClass | null,
    ] = await getConstraints(
      source,
      method,
      constraintsType,
      racialModifiers,
      racialRequirements,
    );

    return reRoll(
      source,
      method,
      pick,
      targetClass,
      constraints,
      constraintsType,
      racialModifiers,
      racialRequirements,
    );
  } else {
    return renderResult(
      source,
      method,
      pick,
      null,
      rollAbilityScores(),
      racialModifiers,
    );
  }
})().catch((error: string | undefined) => {
  if (error?.toString().endsWith("error: ")) {
    console.error("Exited before reaching result");
  } else {
    throw new Error(error);
  }
});
