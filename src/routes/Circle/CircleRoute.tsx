import React, { useState } from 'react';
import { AMSynth, PolySynth } from 'tone';
import Circle from '../../components/Circle';
import CircleStyles from './CircleRoute.module.scss';
import Interval from '../../models/Interval';

export default function CircleRoute() {
    const [circleSettings] = useState({
        instrument: new PolySynth(AMSynth, {
            oscillator: {
                modulationType: 'triangle',
            },
        }).toDestination(),
        octave: 4,
        stepInterval: Interval.PerfectFifth,
    });

    return (
        <div className={CircleStyles.container}>
            <Circle
                instrument={circleSettings.instrument}
                octave={circleSettings.octave}
                stepInterval={circleSettings.stepInterval}
            />
        </div>
    );
}
