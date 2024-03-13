import { css, useTheme } from '@emotion/react';
import { Container } from 'components/common/Container';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { ChangeEvent, forwardRef } from 'react';

interface Props {
  error?: boolean;
  keyword: string | null;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSearch?: () => void;
  onBlur?: () => void;
}

export const Search = forwardRef<HTMLInputElement, Props>(({ error, keyword, onChange, onSearch, onBlur }, ref) => {
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
          margin-bottom: 2px;
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
          value={keyword ?? ''}
          onChange={onChange}
          onBlur={onBlur}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
              onSearch?.();
            }
          }}
          placeholder='상품명 검색'
          css={css`
            width: 100%;
            &::placeholder {
              font-size: 16px;
              font-weight: ${theme.fontWeight.regular};
              line-height: 1.5;
              color: #aaaaaa;
            }
          `}
        />
      </Container>
      {error && (
        <span
          css={css`
            padding-left: 1px;
            color: red;
            font-size: 12px;
          `}
        >
          이미 존재하는 검색어 입니다.
        </span>
      )}
    </Container>
  );
});

Search.displayName = 'Search';
