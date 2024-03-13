import { css } from '@emotion/react';
import { Container } from 'components/common/Container';
import { useEffect, useState } from 'react';
import { ProductType } from 'types/product';
import { debounce } from 'utils/debounce';
import { getKeywordRegex } from 'utils/getKeywordRegex';

interface Props {
  keyword: string;
  productList: ProductType[];
  onClick?: () => void;
}

export const AutoComplete = ({ keyword, productList, onClick }: Props) => {
  const [result, setResult] = useState<ProductType[]>([]);

  const handleAutoCompleteResult = () => {
    const regex = getKeywordRegex(keyword);
    const result = productList.filter((product) => regex.test(product.goodsName) || regex.test(product.brandName));
    setResult(result);
  };

  useEffect(() => {
    debounce(handleAutoCompleteResult, 500)();
  }, [keyword]);

  if (!keyword.length) {
    return null;
  }

  return (
    <Container
      css={css`
        position: absolute;
        max-height: 300px;
        overflow: scroll;
        background: green;
      `}
    >
      <ul>
        {result.map((item) => (
          <li
            key={item.goodsNo}
            onClick={onClick}
            css={css`
              height: 40px;
              border: 1px solid black;
            `}
          >
            {item.goodsName}
            {item.brandName}
          </li>
        ))}
      </ul>
    </Container>
  );
};
