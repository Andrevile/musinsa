import { Meta, StoryObj } from '@storybook/react';
import { ProductCard } from './ProductCard';

const basicMock = {
  goodsNo: 1163605,
  goodsName: '상품명 상품명 상품명 두 줄까지 입력 가능합니다.',
  price: 999999999,
  brandName: '브랜드명',
  imageUrl: 'https://image.msscdn.net/images/goods_img/20190923/1163605/1163605_2_500.jpg',
  linkUrl: 'https://store.musinsa.com/app/goods/1163605',
  brandLinkUrl: 'https://www.musinsa.com/brands/nike',
  normalPrice: 999999999,
  isSale: false,
  saleRate: 34,
  isSoldOut: false,
  isExclusive: false,
};

const meta = {
  title: 'ProductCard',
  component: ProductCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ProductCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  args: { product: basicMock },
};

export const SoldOut: Story = {
  args: { product: { ...basicMock, isSoldOut: true } },
};

export const Exclusive: Story = {
  args: { product: { ...basicMock, isExclusive: true } },
};

export const Sale: Story = {
  args: { product: { ...basicMock, isSale: true } },
};

export const Fallback: Story = {
  args: { product: { ...basicMock, imageUrl: '123' } },
};
