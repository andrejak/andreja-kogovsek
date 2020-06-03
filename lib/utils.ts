export const getYear = (date: string): number => {
  return date ? parseInt(date.substring(0, 4)) : "";
};
