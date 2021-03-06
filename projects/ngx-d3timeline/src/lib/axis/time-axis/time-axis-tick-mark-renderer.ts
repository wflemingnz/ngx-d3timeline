import { TimeScale } from '../../scale-types';
import { TickMarkRenderer, tickLabelSpacing } from '../tick-mark-renderer';
import { Orientation } from '../../orientation';

export function getTimeAxisTickMarkRenderer(
  scale: TimeScale,
  orientation: Orientation
): TickMarkRenderer {
  const tickLineOffset = -5;

  return {
    tickLineOffset,
    orientation,
    getTickValues: () => scale.ticks(),
    getTickLabel: (value: Date) => scale.tickFormat()(value),
    mapTickValueToPositionInScale: (value: Date) => scale(value),
    getTickLabelSpacing: () => tickLineOffset + tickLabelSpacing
  };
}
