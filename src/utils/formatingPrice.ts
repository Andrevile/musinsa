export const formatingPrice = (price?: number) => {
  if (!price) {
    return '';
  }

  return `${price.toLocaleString('ko-KR')}원`;
};
