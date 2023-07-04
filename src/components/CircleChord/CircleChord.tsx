import React from 'react';
import CircleChordStyles from './CircleChord.module.scss';

export default function CircleChord({ root, onClick }: {
  root: string,
  onClick: () => void
}) {
  return (
    <li className={CircleChordStyles.chord}>
      <button onClick={onClick}>
        {root}
      </button>
    </li>
  );
}
