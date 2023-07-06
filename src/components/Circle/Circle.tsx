import React, { useMemo, useRef, useState } from 'react';
import CircleStyles from './Circle.module.scss';
import CircleChord from '../CircleChord';
import Interval from '../../models/Interval';
import { chromaticScale } from '../../models/Scales';

function sortByInterval(arr: any[], interval: Interval) {
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

export default function Circle() {
    const [interval] = useState(Interval.PerfectFifth);
    const chords = useMemo(
        () => sortByInterval(chromaticScale, interval),
        [interval],
    );

    return (
        <ul className={CircleStyles.circle}>
            {chords.map((n) => (
                <CircleChord
                    root={n}
                    onClick={() => {}}
                />
            ))}
        </ul>
    );
}
