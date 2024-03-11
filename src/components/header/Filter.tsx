import { css } from '@emotion/react';
import { ChipButton } from 'components/common/ChipButton';
import { Container } from 'components/common/Container';
import { RefreshIcon } from 'components/common/icons/RefreshIcon';
import { Tag } from 'components/common/Tag';
import { FILTER_OPTIONS } from 'constants/filter';
import { useFilter } from 'hooks/common/useFilter';
import { ReactNode } from 'react';
import { FilterOptionType } from 'types/filter';

interface Props {
  filterList: string[];
  handleFilterList: (filterList: string[]) => void;
  children?: ReactNode;
}

export default function Filter({ filterList, handleFilterList, children }: Props) {
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
        {children}
        {Object.entries(FILTER_OPTIONS).map(([id, value]) => (
          <ChipButton key={id} onToggle={() => toggleFilter(id)} highlight={selectedFilter.has(id)}>
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
              <Tag
                key={item}
                item={{ id: item, text: FILTER_OPTIONS[item as FilterOptionType] }}
                onClose={() => toggleFilter(item)}
              />
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
