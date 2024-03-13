export const getKeywordRegex = (keyword: string) => {
  const regex = new RegExp(`(${keyword})`, 'gi');
  return regex;
};
