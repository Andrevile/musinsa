export type ProductType = {
  goodsNo: number;
  goodsName: string;
  price: number;
  brandName: string;
  imageUrl: string;
  linkUrl: string;
  brandLinkUrl: string;
  normalPrice: number;
  isSale: boolean; //할인여부
  saleRate: number; //할인률
  isSoldOut: boolean; //품절여부
  isExclusive: boolean; //독점여부
};
