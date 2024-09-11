/**
 * Changes the provided text color to green via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns green text.
 */
export const green = (text: string): string => `\x1b[32m${text}\x1b[0m`;
