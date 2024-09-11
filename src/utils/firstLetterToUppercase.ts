export const firstLetterToUppercase = (text: string): string => {
  const [firstLetter, ...rest] = text;

  return `${firstLetter.toUpperCase()}${rest.join("")}`;
};
