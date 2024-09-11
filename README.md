<br/>
<div align="center">
  <img alt="oseer art banner" style="max-height:100px" src="https://github.com/jlampar/oseer/blob/ecb19aeabebacb8f1ecfa20e231b95a4bd9c6ff9/src/assets/oseer_readme_banner.png?raw=true">
</div>
<br/>

<h1 align="center"><strong>oseer</strong></h1>

<p align="center">
  <a href="https://www.npmjs.com/package/oseer">
    <img src="https://img.shields.io/npm/v/oseer.svg?logo=npm" alt="NPM version"/>
  </a>
  <a>
    <img src="https://img.shields.io/badge/license-Custom-377eb8" alt="License">
  </a>
  <a href="https://github.com/nodejs/node">
    <img src="https://img.shields.io/badge/Node.js-4daf4a" alt="Node">
  </a>
  <a href="https://github.com/enquirer/enquirer">
    <img src="https://img.shields.io/badge/Enquirer-984ea3" alt="Enquirer">
  </a>
  <a href="https://github.com/yargs/yargs">
    <img src="https://img.shields.io/badge/Yargs-e41a1c" alt="Yargs">
  </a>
  <a href="https://github.com/sindresorhus/ora">
    <img src="https://img.shields.io/badge/Ora-ffff33" alt="Ora">
  </a>
</p>
<br/>
Oseer is a simple and intuitive CLI tool to help you roll your Ability Scores for the 'Old-School Essentials' role-playing game and then quickly review all the applicable modifiers. Based on the results, the tool checks which classes can benefit from a positive Prime Requisite Modifier (PRM), while also highlighting classes that are off-limits for your character. It can even pick a class for you at random, optimizing for the highest PRM possible (you can ignore Oseer's predictions, but do so only at your own risk!). Oseer does the hard work of checking all the PRMs and class requirements so you don't have to spend time on scanning all of your OSE books - simply let Oseer narrow down your options and get going!

## Description

Oseer was created to help you out in the following situations:

1. You want to roll a character and instantly see which classes best suit your Ability Scores and which classes are out of your reach. The tool will identify the recommended classes based on the Prime Requisite Modifier (PRM) formulas and the disallowed ones based on class requirements as laid out in the rulebooks.
2. You want to utilize the optional race and class seperation rule from Advanced Fantasy and apply racial modifiers after your roll. In this scenario, the tool will base its class recommendations on the Ability Scores adjusted by the applicable modifiers. If you prefer you can also first pick a race and then roll with racial modifiers already applied - this may possibly result in the scores not meeting the requirements for a particular race, but you can avoid this by using constraints (see the following point).
3. Your Referee allows for re-rolling scores until they meet some conditions. You can set these conditions as constraints for the rolls on individual scores (e.g. to guarantee at least STR 14) or on the whole set (e.g. to ensure you get at least 2 scores above 13 or to force a re-roll if every score is 8 or less). The tool will then re-generate results until they meet your requirements.

### Disclaimer on using Prime Requisite Modifier

We are aware that not all tables use the Prime Requisite Modifier. Oseer neither encourages nor discourages the use of this modifier, treating it like a tie-breaker when it comes to recommending classes based on the rolls. We do think that although sometimes ignored or useless, the PRM can be perceived as a narrative device that describes an archetypical representation of a class, at least as far as Ability Scores go. And since Ability Scores are the main point of interest of Oseer, the PRM was selected as a driving factor behind its recommendations. If you purposefully want to _play against_ class stereotypes, you might find this tool useless.

## Installation and setup

### Prerequisites

All you need to get started is to have [Node.js](https://nodejs.org/en) installed on your machine. The package manager `npm`, using which `oseer` can be installed and started, will be installed alongside `Node.js`.
For executing the commands referred to in this guide, you can use `terminal` (macOS, Linux) or `PowerShell`/`CMD` (Windows).

### Local

After cloning this git repository to your machine, install oseer by running `npm install` in the project's root directory. Next, run `npm run build` to make it ready for use. You can then use `npm link` to make the tool launchable with the `oseer` command. Otherwise, it can be launched by running the command `npm run start` in the project root (but keep in mind that running with `npm run start` doesn't allow you to use the CLI options listed later on in this guide).

### From npm

The tool is also a published npm package that you can easily install by running `npm install -g oseer` globally on your machine. Afterwards, you can simply launch it with the command `oseer`. **This is probably the best way of using it.**

## Usage

After starting the tool without providing any CLI flags (discussed later) it'll walk you through a set of prompts:

1. The intro prompt - to inform Oseer if you want it to pick a class for you or do a full breakdown of classes.
2. **Pick a source of classes**  
   The available options are **Classic Fantasy**, **Advanced Fantasy** and **Advanced Fantasy with the addition of Carcass Crawler**.
3. **Pick a mode**  
   There are two modes in which you can use Oseer:
   1. **Roll** - programmatically roll 3d6 DTL to get a new set of Ability Scores, or
   2. **Analyze** - input your existing Ability Scores and receive the recommendations and metadata as output.
4. **Pick a method of rolling**  
   You can choose any of the below:
   1. **Roll 3d6 DTL.** Roll 3d6 down the line.
   2. **Apply racial modifiers, then roll 3d6 DTL.** Roll 3d6 DTL after you apply racial modifiers. Can be used e.g. when you want to pick a race which has no requirements.
   3. **Roll 3d6 DTL, then apply racial modifiers.** Roll 3d6 DTL and then apply racial modifiers after seeing the intermediate results.
   4. **Re-roll 3d6 DTL with constraints.** Roll 3d6 DTL with constraints on the resulting scores. Using this method, you will be prompted to set the constraints' types and minimal values for chosen scores and then the entire set of 6 scores will be re-rolled from scratch until the given conditions are met. This can be used e.g. when you want to meet some requirements for a character with a specific class/race that you already have in mind or your Referee allows you to re-roll the whole set when it doesn't meet certain criteria you agreed on (e.g. at least half of the scores should be higher than 6).
   5. **Apply racial modifiers, then re-roll 3d6 DTL with constraints.** Re-roll using the method described above, but with a race already picked. Can be used e.g. when you already decided on everything and just need fitting scores.
   6. **Re-roll 3d6 DTL with constraints, then apply racial modifiers.** Re-roll using the method described above, but with race modifiers applied after all the re-rolls. Can be used e.g. when you know about some minimal requirements for a specific class but want to choose a race later.
5. **Input racial modifiers**
   1. If you picked a method of rolling that requires you to put racial modifiers before you roll, you will be asked to input them immediately after picking the method. If the method is also constrained, you can input racial requirements, e.g. `STR +1` is +1 STR modifier but `STR +1,9` also means that the results will be re-rolled until the STR is at least 9. Likewise `STR 0,9` indicates: no modifier, only a racial requirement of a minimal STR score of 9.
   2. If you picked a method of rolling that requires you to put racial modifiers after you roll, you will see the intermediate results displayed first, and only then will you be asked to input the modifiers.
6. **Pick constraints type (prompt shows only if you selected a constrained method)**
   1. **At least X scores should be no less than Y.** Constraint is put on the whole set - a selected number of results should be above a certain threshold e.g. at least one score must equal 14 or higher. This can come in handy if you want to play with a bit of heroic flair or maybe you are allowed to have at least one guaranteed high ability score. Also, this constraint can implement the 'Sub-Par Characters' rule from the OSE sourcebook.
   2. **Discard sets that have every score less than or equal to X.** Sets are re-rolled when all scores are below a certain threshold, e.g. all are 8 or less. This constraint can implement the 'Sub-Par Characters' rule from the OSE sourcebook.
   3. **Selected scores should be no less than the given target values.** Constraints are put on individual scores e.g. STR must be no less than 13 and CON must be no less than 16. This can be used if you want to meet some minimal requirements for a class/race or a certain PRM formula of a class. Don't say a word about this method to the most hardcore grognards, they will put a bounty on you.
   4. **Scores should be enough to have a positive PRM for a selected class.** Constraints are not provided by the user but derived directly from a selected class config entry (the same on which recommendations are based). You're guaranteed to meet at least the +5% PRM requirements for the selected class. In case of picking a class that has a PRM calculated from one of many score targets, the variant is chosen at random (e.g. a halfling will have +5% PRM if STR is 13 or DEX is 13). If you decided before that Oseer should pick a class for you, this is the one it'll return.
   5. **None (just racial requirements).** If you chose to input racial modifiers before you roll, selected a constrained method and you provided any racial requirements, you'll have this option available. This constraint type is basically equivalent to the **'Selected scores should be no less than the given target values'** option, except the 'target values' here are just the racial requirements.

After all of the above prompts are addressed, the tool will display the final result in the following form:

<div align="center">
  <img alt="analyze" src="https://github.com/jlampar/oseer/blob/ecb19aeabebacb8f1ecfa20e231b95a4bd9c6ff9/src/assets/analyze.png?raw=true">
</div>

If you decided that the Oseer should pick a class for you, the result may look like this:

<div align="center">
  <img alt="pick" src="https://github.com/jlampar/oseer/blob/ecb19aeabebacb8f1ecfa20e231b95a4bd9c6ff9/src/assets/pick.png?raw=true">
</div>

### CLI Options:

The tool can be launched with the CLI options listed below. They allow the user to quickly skip the questions about the class source and the roll method.

```bash
      --help              Show help                      [boolean]
      --version           Show version number            [boolean]
  -s, --source            The source of classes          [choices: "classic", "advanced", "advanced-with-carcass-crawler"]
  -m, --mode              Roll or analyze the results    [choices: "roll", "analyze"]
  -e, --method            Method of rolling              [choices: "simple", "race-adjusted", "constrained", "race-adjusted-constrained", "race-adjusted-afterwards", "race-adjusted-afterwards-constrained"]
  -c, --constraints-type  Type of constraints            [choices: "random", "every", "fixed", "class", "none"]
  -p, --pick              Let Oseer pick a class for you [boolean]

```

The `--help` flag provides more context on the choices.

## Expanding the config files with homebrew content

The tool is extensible and can be supplied with any OSE-compatibile class. If you wish to add anything homebrew:

1. Add the name of a Class or Demi-Human Class to `Class.type.ts` or `DemiHumanClass.type.ts` from the `src/types` directory.

**_Example:_**

```ts
export type Class =
  | "acrobat"
  | "assassin"
  | "barbarian"
  | "bard"
  | "cleric"
  | "druid"
  | "fighter"
  | "illusionist"
  | "knight"
  | "magic-user"
  | "paladin"
  | "ranger"
  | "thief"
  | "acolyte" // cc1
  | "kineticist" // cc1
  | "mage" // cc1
  | "beast master" // cc3
  | "new class"; // <-- the new class goes here
```

2. Next, add the new class to the `homebrewClassesConfig.ts` or `homebrewDemiHumanClassesConfig.ts` config from the `src/config` directory. This will make the class available regardless of which class source is chosen in the first prompt, since the contents of these two configs are always appended to the config of the selected source.

**_Example:_**  
You want to add a class that has the following requirements: minimum `STR 9`, minimum `INT 13`. Its Prime Requisite Modifier is `STR`. You can add it to the config file like this:

```ts
{
  name: "new class",
  requirements: { STR: 9, INT: 13 }, // minimum STR 9 and INT 13 goes here as an object
  primeRequisite: {
    "5": [{ STR: 13 }],
    "10": [{ STR: 16 }],
  },
},
```

You may wonder why the `primeRequisite` has it's values in arrays, even if it is one object. It is because some classes can have a reqirement for PRM that is basically `X OR Y`. In that case, we treat the relationship between array members as `OR`.

**_Example:_**  
To add a class with no Requirements, but with a `+5% PRM` when it has `STR 13` or `CON 13` and `+10% PRM` when it has `STR 16` and `CON 16`, the following entry must be inserted into the config:

```ts
{
  name: "new class",
  requirements: null
  primeRequisite: {
    "5": [{ STR: 13 }, { CON: 13 }],
    "10": [{ STR: 16, CON: 16 }],
  },
},
```

Note the difference between how +5% and +10% PRM are expressed:

- `+5% PRM` is an array of two objects, each consisting of one Ability Score target: the relationship between them is `OR`: `{ STR: 13 } OR { CON: 13 }`
- `+10% PRM` is an array of one object, consiting of multiple Ability Score targets: the relationship between those values, within one object, is `AND`: `STR: 16 AND CON: 16`.

Let's now consider a more complex example. Assume we have a class whose PRM formula is: `+5% PRM` when `WIS 13` and `CHA 13` and `+10% PRM` when one of them is `16` and the other one is `13`. This can be expressed in the following way:

```ts
{
  name: "new class",
  requirements: null
  primeRequisite: {
    "5": [{ WIS: 13, CHA: 13 }],
    "10": [{ WIS: 16, CHA: 13 }, { WIS: 13, CHA: 16 }],
  },
},
```

This way - for the `+10% PRM` - we created the following formula: `(WIS 16 AND CHA 13) OR (WIS 13 AND CHA 16)`, which is a longer way of saying that the class has PRM based on `WIS` and `CHA` and you need `16` in one of them and `13` in another.

## Bug Reports & Feature Requests

Please use the [issue tracker](https://github.com/jlampar/oseer/issues) to report any bugs or feature requests.

## Contributors

- [Filip Rybczyński](https://github.com/filip-rybczynski) - manual testing and proofreading
- [Jakub 'Reebalt' Głąb](https://www.artstation.com/reebalt) - the '3D6 demilich' art at the README opening

## Legal

<div align="center">
  <img alt="Designed for use with OLD-SCHOOL ESSENTIALS" width="235px" src="https://github.com/jlampar/oseer/blob/ecb19aeabebacb8f1ecfa20e231b95a4bd9c6ff9/src/assets/designed_for_use_with_ose.png?raw=true">
</div>
<br/>

Oseer is an independent open-source project by Jakub Lamparski & contributors and is not affiliated with Necrotic Gnome. Permission to include additional classes from Advanced Fantasy and Carcass Crawler granted by Necrotic Gnome & James Maliszewski. Old-School Essentials is a trademark of Necrotic Gnome. The trademark and Old-School Essentials logo are used with permission of Necrotic Gnome, under license.
