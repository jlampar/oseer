/**
 * Changes the provided text color to red via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns red text.
 */
export const red = (text: string): string => `\x1b[31m${text}\x1b[0m`;
