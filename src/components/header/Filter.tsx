import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { Container } from 'components/common/Container';
import { RefreshIcon } from 'components/common/icons/RefreshIcon';
import { SearchIcon } from 'components/common/icons/SearchIcon';
import { Tag } from 'components/common/Tag';
import { FILTER_OPTIONS } from 'constants/filter';
import { useFilter } from 'hooks/common/useFilter';
import { FilterOptionType } from 'types/filter';

interface Props {
  filterList: FilterOptionType[];
  handleFilterList: (filterList: FilterOptionType[]) => void;
}

export default function Filter({ filterList, handleFilterList }: Props) {
  const { toggleFilter, resetFilter } = useFilter({ filterList, setFilterList: handleFilterList });

  const selectedFilter = new Set(filterList);

  return (
    <>
      <Container
        css={css`
          position: interit;
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
        {Object.entries(FILTER_OPTIONS).map(([id, value]) => (
          <ChipButton
            key={id}
            onToggle={() => toggleFilter(id as FilterOptionType)}
            highlight={selectedFilter.has(id as FilterOptionType)}
          >
            {value}
          </ChipButton>
        ))}
      </Container>
      {!!filterList.length && (
        <Container
          css={css`
            position: relative;
            height: 50px;
            padding: 12px 15px;
          `}
        >
          <Container
            css={css`
              overflow-x: scroll;
              display: inline-flex;
              flex-wrap: nowrap;
              gap: 5px;
              ::-webkit-scrollbar {
                display: none;
              }
            `}
          >
            {filterList.map((item) => (
              <Tag key={item} item={{ id: item, text: FILTER_OPTIONS[item] }} onClose={() => toggleFilter(item)} />
            ))}
            <button
              onClick={resetFilter}
              css={css`
                background: #ffffff;
                width: 50px;
                height: 50px;
                position: absolute;
                right: 0;
                top: 0;
              `}
            >
              <RefreshIcon />
            </button>
          </Container>
        </Container>
      )}
    </>
  );
}
