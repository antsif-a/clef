import { Synth, Unit } from 'tone';

export default function usePlayNote(note: Unit.Frequency, duration: Unit.Time) {
    new Synth()
        .toDestination()
        .triggerAttackRelease(note, duration);
}
