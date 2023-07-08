// export const chromaticScale = [
//     'C',
//     'C#/Db',
//     'D',
//     'D#/Eb',
//     'E',
//     'F',
//     'F#/Gb',
//     'G',
//     'G#/Ab',
//     'A',
//     'A#/Bb',
//     'B',
// ];

import { Frequency, FrequencyClass } from 'tone';

const chromaticNotes = [
    'C',
    'C#',
    'D',
    'D#',
    'E',
    'F',
    'F#',
    'G',
    'G#',
    'A',
    'A#',
    'B',
];

export type Scale = FrequencyClass[];

export function getChromaticScale(octave: number) {
    return chromaticNotes.map((n) => Frequency(`${n}${octave}`));
}
