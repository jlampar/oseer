/**
 * Changes the provided text to dim via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns dim text.
 */
export const dim = (text: string): string => `\x1b[2m${text}\x1b[0m`;
