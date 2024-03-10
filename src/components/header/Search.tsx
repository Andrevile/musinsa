import { css, useTheme } from '@emotion/react';
import { Container } from 'components/common/Container';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { forwardRef } from 'react';

export const Search = forwardRef<HTMLInputElement>((_, ref) => {
  const theme = useTheme();

  return (
    <Container
      css={css`
        padding: 20px 15px;
        height: 80px;
        background: ${theme.colors.lightGray};
      `}
    >
      <Container
        css={css`
          display: flex;
          background: #ffffff;
          width: 100%;
          height: 40px;
          padding: 8px 10px;
        `}
      >
        <span
          css={css`
            margin-right: 1px;
          `}
        >
          <SearchIcon size={22} />
        </span>
        <input
          ref={ref}
          placeholder='상품명 검색'
          css={css`
            &::placeholder {
              font-size: 16px;
              font-weight: ${theme.fontWeight.regular};
              line-height: 1.5;
              color: #aaaaaa;
            }
          `}
        />
      </Container>
    </Container>
  );
});

Search.displayName = 'Search';
