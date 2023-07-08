import React from 'react';
import { FrequencyClass, PolySynth } from 'tone';
import CircleChordStyles from './CircleChord.module.scss';
import Interval from '../../models/Interval';
import usePlayChord from '../../hooks/usePlayChord';

interface CircleChordProps {
    root: FrequencyClass;
    intervals: Interval[];
    instrument: PolySynth;
}

export default function CircleChord({
    root,
    intervals,
    instrument,
}: CircleChordProps) {
    return (
        <li className={CircleChordStyles.chord}>
            <button
                onClick={() => usePlayChord(instrument, root, intervals, '8n')}
            >
                {root.toNote().slice(0, -1) /* remove octave number */}
            </button>
        </li>
    );
}
