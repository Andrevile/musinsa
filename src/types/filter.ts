import { FILTER_OPTIONS } from 'constants/filter';

export type FilterItemType = {
  id: 'onlySale' | 'onlyExclusive' | 'includeSoldOut';
  text: (typeof FILTER_OPTIONS)[FilterOptionType];
};

export type FilterOptionType = keyof typeof FILTER_OPTIONS;
