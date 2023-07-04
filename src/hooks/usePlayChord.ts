import { Unit } from "tone";
import usePlayNote from "./usePlayNote";

export default function usePlayChord(chord: Unit.Note, duration: Unit.Time) {
    usePlayNote(chord, duration);
}