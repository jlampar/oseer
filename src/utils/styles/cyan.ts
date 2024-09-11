/**
 * Changes the provided text color to cyan via ANSI Escape Codes.
 * @param text text to be styled.
 * @returns cyan text.
 */
export const cyan = (text: string): string => `\x1b[36m${text}\x1b[0m`;
