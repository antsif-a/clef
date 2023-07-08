import { FrequencyClass, PolySynth, Unit } from 'tone';
import Interval from '@/models/Interval';

export default function usePlayChord(
    instrument: PolySynth,
    root: FrequencyClass,
    intervals: Interval[],
    duration: Unit.Time,
) {
    const notes = root
        .harmonize(intervals)
        .map((n) => n.valueOf());

    instrument.triggerAttackRelease(notes, duration);
}
