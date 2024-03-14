export const getKeywordRegex = (keyword: string) => {
  const escapedKeyword = keyword.replace(/[^ㄱ-ㅎ|ㅏ-ㅣ|가-햫|a-z|A-Z|0-9|\s]+/g, '\\$&'); // 이스케이프 처리
  const regex = new RegExp(`(${escapedKeyword})`, 'gi');

  return regex;
};
