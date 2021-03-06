import { selectView } from '../store/state';
import { getViewTopLeft, getViewClipRectangle } from './view-utils';
import { createSelector } from '../store-lib/selector/create-selector';

export const selectViewTopLeft = createSelector(selectView, getViewTopLeft);

export const selectViewClipRectangle = createSelector(
  selectView,
  getViewClipRectangle
);
