import { createSelector } from '../store-lib/selector/create-selector';
import {
  selectPositionedActivities,
  selectView,
  selectZoomEvent
} from './state'; // TODO use barelling?
import { configureBandScale, rescaleTime } from '../scale-utils';
import {
  selectResourceOrientation,
  selectTimeOrientation
} from '../options.selectors';

export const selectBandScale = createSelector(
  selectPositionedActivities,
  selectView,
  selectResourceOrientation,
  configureBandScale
);

export const selectTimeScale = createSelector(
  selectPositionedActivities,
  selectView,
  selectTimeOrientation,
  selectZoomEvent,
  rescaleTime
);
