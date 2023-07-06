import React from 'react';
import { Link } from 'react-router-dom';
import usePlayNote from '../hooks/usePlayNote';

export default function RootRoute() {
    function playCMajor() {
        usePlayNote('C4', '8n');
        usePlayNote('E4', '8n');
        usePlayNote('G4', '8n');
    }

    return (
        <>
            <p>Hello World!</p>
            <button onClick={playCMajor}>
                <p>Play C4 major chord</p>
            </button>
            <Link to="/circle">Go to Circle</Link>
        </>
    );
}
