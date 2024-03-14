import { css, useTheme } from '@emotion/react';
import { Container } from 'components/common/Container';
import { Typography } from 'components/common/Typography';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { HTMLAttributes, useEffect, useState } from 'react';
import { ProductType } from 'types/product';
import { debounce } from 'utils/debounce';
import { getKeywordRegex } from 'utils/getKeywordRegex';

interface Props {
  keyword: string;
  productList: ProductType[];
  onClick?: (item: ProductType) => void;
}

export const AutoComplete = ({ keyword, productList, onClick }: Props) => {
  const [result, setResult] = useState<ProductType[]>([]);

  const trimKeyword = keyword.trim();

  const handleAutoCompleteResult = () => {
    if (!trimKeyword.length) {
      return;
    }

    const regex = getKeywordRegex(trimKeyword);
    const result = productList.filter((product) => regex.test(product.goodsName) || regex.test(product.brandName));
    setResult(result);
  };

  useEffect(() => {
    let autoComplete;
    autoComplete = debounce(handleAutoCompleteResult, 400);
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
        background: #ffffff;
      `}
    >
      <ul>
        {result.map((item, index) => (
          <AutoCompleteItem key={index} item={item} keyword={trimKeyword} onClick={() => onClick?.(item)} />
        ))}
      </ul>
    </Container>
  );
};

function AutoCompleteItem({
  item,
  keyword,
  ...rest
}: { item: ProductType; keyword: string } & HTMLAttributes<HTMLLIElement>) {
  const theme = useTheme();

  return (
    <li
      {...rest}
      key={item.goodsNo}
      css={css`
        padding: 4px 10px;
        display: flex;
        align-items: center;
        height: 40px;
        border-bottom: 1px solid ${theme.colors.lightGray};
        text-overflow: ellipsis;
        font-size: 9px;
        font-weight: ${theme.fontWeight.regularBold};
        cursor: pointer;
      `}
    >
      <span
        css={css`
          width: 20px;
          height: 20px;
          background: ${theme.colors.heavyGray};
          border-radius: 50%;
          margin-right: 6px;
        `}
      >
        <SearchIcon size={20} />
      </span>
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <span
          css={css`
            color: gray;
            margin-bottom: 2px;
          `}
        >
          <Typography.Highlight text={item.brandName} keyword={keyword} />
        </span>
        <span
          css={css`
            font-size: 10px;
          `}
        >
          <Typography.Highlight text={item.goodsName} keyword={keyword} />
        </span>
      </div>
    </li>
  );
}
