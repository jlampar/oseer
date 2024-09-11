/**
 * Indents the text by the provided number of space. The indentation is measured from the text start, not the first column (so e.g. it can be used to distance strings from each other).
 * @param text text to be styled.
 * @param indentSize indentation size (in spaces).
 * @returns indented text.
 */
export const indent = (text: string, indentSize: number): string | never => {
  if (indentSize < 0) {
    throw new Error("indentSize cannot be negative");
  }

  const _ = Array(indentSize).fill(" ").join("");

  return `${_}${text}`;
};
