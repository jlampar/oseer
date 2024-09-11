/**
 * Checks if a provided string is a positive numeric and can be safely converted to number.
 * @param value a string inputted into a prompt form
 * @returns whether or not a provided string is a valid, positive number
 */
export const isPositiveNumber = (value: string) => /^\d+$/.test(value);
