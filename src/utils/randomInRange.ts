/**
 * Utility function to simulate a dice roll. It uses a bitwise flooring for speed (for such a small range it's safe).
 * @param min the lower border of the range
 * @param max the upper border of the range
 * @returns random number within the borders (inlcusive)
 */
export const randomInRange = (min: number, max: number): number =>
  ((Math.random() * (max - min + 1)) | 0) + min;
