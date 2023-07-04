import { Unit } from "tone";
import Interval from "./Interval";

export default class Note {
    constructor(
        private name: Unit.Note,
    ) {}

    static byName(name: Unit.Note) {
        return new Note(name);
    }

    getNoteByInterval(interval: Interval) {

    }
}