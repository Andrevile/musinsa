import { css } from '@emotion/react';
import { Fragment } from 'react';
import { getKeywordRegex } from 'utils/getKeywordRegex';

const Highlight = ({ text, keyword }: { text: string; keyword: string }) => {
  const textChunk = text.split(getKeywordRegex(keyword));

  return (
    <>
      {textChunk.map((chunk, index) =>
        chunk.toLowerCase() === keyword.toLowerCase() ? (
          <span
            css={css`
              color: #0078ff;
            `}
            key={index}
          >
            {chunk}
          </span>
        ) : (
          <Fragment key={index}>{chunk}</Fragment>
        ),
      )}
    </>
  );
};

export const Typography = {
  Highlight,
};
