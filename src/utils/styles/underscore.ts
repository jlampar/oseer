/**
 * Underscores the provided text input via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns underscored text.
 */
export const underscore = (text: string): string => `\x1b[4m${text}\x1b[0m`;
