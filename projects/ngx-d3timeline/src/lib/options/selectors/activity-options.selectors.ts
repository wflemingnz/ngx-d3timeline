import { createSelector } from '../../store-lib/selector/create-selector';
import { selectOptions } from '../../store/state';
import { MemoizedSelector } from '../../store-lib/selector/memoized-selector';

export const selectActivityOptions = createSelector(
  selectOptions,
  options => options.activity
);

export const selectActivityFontFace = createSelector(
  selectActivityOptions,
  options => options.fontFace
);

export const selectActivityFontSize = createSelector(
  selectActivityOptions,
  options => options.fontSize
);

export const selectGlobalActivityOption = <T>(
  key: string
): MemoizedSelector<T> =>
  createSelector(selectActivityOptions, options => options[key]);
