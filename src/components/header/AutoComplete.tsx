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

  const trimKeyword = keyword.trim();

  const handleAutoCompleteResult = () => {
    const regex = getKeywordRegex(trimKeyword);
    const result = productList.filter((product) => regex.test(product.goodsName) || regex.test(product.brandName));
    setResult(result);
  };

  useEffect(() => {
    let autoComplete;
    autoComplete = debounce(handleAutoCompleteResult, 500);
    autoComplete();

    return () => {
      autoComplete = null;
    };
  }, [keyword]);

  if (!trimKeyword.length) {
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
