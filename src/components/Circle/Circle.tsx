import React, {
    useEffect,
    useMemo,
    useRef,
    useState,
} from 'react';
import TheoryCircleStyles from './Circle.module.scss';
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
    const chordContainer = useRef<HTMLDivElement>(null);

    useEffect(() => {
        Array.from(chordContainer.current!.children).forEach((li, i) => {
            const rot = (i * 360) / chords.length + 1;
            (li as HTMLLIElement).style.transform = `
                translate(-50%, -50%)
                rotate(${rot}deg)
                translateY(-15rem)
                rotate(-${rot}deg
            `;
        });
    });

    return (
        <ul className={TheoryCircleStyles.circle}>
            <div ref={(chordContainer)}>
                {chords.map((n) => (
                    <CircleChord
                        root={n}
                        onClick={() => {}}
                        key={Math.random()} // wtf
                    />
                ))}
            </div>
        </ul>
    );
}
