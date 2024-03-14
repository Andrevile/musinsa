import { css } from '@emotion/react';
import { getKeywordRegex } from 'utils/getKeywordRegex';

const Highlight = ({ text, keyword }: { text: string; keyword: string }) => {
  const textChunk = text.split(getKeywordRegex(keyword));

  return (
    <>
      {textChunk.map((chunk, index) =>
        chunk === keyword ? (
          <span
            css={css`
              color: #0078ff;
            `}
            key={index}
          >
            {chunk}
          </span>
        ) : (
          <>{chunk}</>
        ),
      )}
    </>
  );
};

export const Typography = {
  Highlight,
};
