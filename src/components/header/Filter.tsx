import { ChipButton } from '@components/common/ChipButton';
import { Container } from '@components/common/Container';
import { SearchIcon } from '@components/common/icons/SearchIcon';
import { css } from '@emotion/react';

export default function Filter() {
  return (
    <Container
      css={css`
        height: 55px;
        padding: 10px 7px;
        display: inline-flex;
        flex-wrap: nowrap;
        gap: 5px;
        overflow-x: scroll;

        ::-webkit-scrollbar {
          display: none;
        }
      `}
    >
      <ChipButton icon={SearchIcon}>검색</ChipButton>
      <ChipButton>세일상품</ChipButton>
      <ChipButton>단독상품</ChipButton>
      <ChipButton>품절포함</ChipButton>
    </Container>
  );
}
