/**
 * Changes the provided text to bright (bold) via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns bright text.
 */
export const bright = (text: string): string => `\x1b[1m${text}\x1b[0m`;
