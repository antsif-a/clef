import React, { useMemo } from 'react';
import { PolySynth, Unit } from 'tone';
import CircleStyles from './Circle.module.scss';
import CircleChord from '../CircleChord';
import Interval from '../../models/Interval';
import { getChromaticScale, Scale } from '../../models/Scales';

function sortByInterval(arr: Scale, interval: Interval) {
    const newArr = [...arr];
    let counter = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        if (counter + interval >= arr.length) {
            counter -= arr.length - interval;
        } else {
            counter += interval;
        }

        newArr[i + 1] = arr[counter];
    }

    return newArr;
}

interface CircleProps {
    instrument: PolySynth;
    octave: number;
    stepInterval: Unit.Interval;
}

export default function Circle({
    instrument,
    octave,
    stepInterval,
}: CircleProps) {
    const chords = useMemo(
        () => sortByInterval(getChromaticScale(octave), stepInterval),
        [stepInterval, octave],
    );

    return (
        <ul className={CircleStyles.circle}>
            {chords.map((note) => (
                <CircleChord
                    instrument={instrument}
                    root={note}
                    intervals={[
                        Interval.Unison,
                        Interval.MajorThird,
                        Interval.PerfectFifth,
                    ]}
                    key={note.toFrequency()}
                />
            ))}
        </ul>
    );
}
