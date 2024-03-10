import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { Container } from 'components/common/Container';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { Tag } from 'components/common/Tag';
import { useState } from 'react';
import { FilterItemType } from 'types/filter';

export default function Filter() {
  const [filterList] = useState<FilterItemType[]>([
    { id: '아이템1', text: '아이템1' },
    { id: '아이템2', text: '아이템2' },
    { id: '아이템3', text: '아이템3' },
    { id: '아이템4', text: '아이템4' },
    { id: '아이템5', text: '아이템5' },
  ]);

  return (
    <>
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
        <ChipButton icon={<SearchIcon />}>검색</ChipButton>
        <ChipButton>세일상품</ChipButton>
        <ChipButton>단독상품</ChipButton>
        <ChipButton>품절포함</ChipButton>
      </Container>
      {/* <Container
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
        {filterList.map((item) => (
          <Tag key={item.id} item={item} />
        ))}
      </Container> */}
    </>
  );
}
