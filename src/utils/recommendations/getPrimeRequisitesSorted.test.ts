import { ClassConfigEntry, DemiHumanClass } from "../../types";
import { getPrimeRequisitesSorted } from "./getPrimeRequisitesSorted";

describe("getPrimeRequisitesSorted", () => {
  it("should correctly sort prime requisites entries", () => {
    const entry: ClassConfigEntry<DemiHumanClass> = {
      name: "elf",
      requirements: { INT: 9 },
      primeRequisite: {
        "5": [{ STR: 13, INT: 13 }],
        "10": [{ STR: 13, INT: 16 }],
      },
    };

    const [[firstPrimeRequisite], [secondPrimeRequisite]] =
      getPrimeRequisitesSorted(entry);

    expect(firstPrimeRequisite).toEqual("10");
    expect(secondPrimeRequisite).toEqual("5");
  });
});
