import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { ReactNode } from 'react';
import { ProductType } from 'types/product';

interface Props {
  itemList: ProductType[];
  renderItem: (item: ProductType, index?: number) => ReactNode;
}

export const ProductGrid = ({ itemList, renderItem }: Props) => {
  return (
    <Container>
      <ul
        css={css`
          display: grid;
          grid-template-columns: repeat(2, 1fr);
        `}
      >
        {itemList.map((item, index) => (
          <li key={item.goodsNo}>{renderItem(item, index)}</li>
        ))}
      </ul>
    </Container>
  );
};
