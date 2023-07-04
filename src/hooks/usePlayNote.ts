import { Synth, Unit } from 'tone';

export default function usePlayNote(note: Unit.Frequency, duration: Unit.Time) {
    const synth = new Synth().toDestination();
    synth.triggerAttackRelease(note, duration);
}
