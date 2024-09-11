import { renderTableHeader } from "./renderTableHeader";

describe("renderTableHeader", () => {
  it("should correctly render table header", () => {
    const consoleLogSpy = jest
      .spyOn(global.console, "log")
      .mockImplementation(() => {});

    renderTableHeader();

    expect(consoleLogSpy).toHaveBeenCalledTimes(1);
    expect(consoleLogSpy).toHaveBeenCalledWith(
      "        \x1b[4mScore:\x1b[0m    \x1b[4mPRM:\x1b[0m  \x1b[4mModifiers:\x1b[0m",
    );
  });
});
