import React from 'react';
import Circle from '../../components/Circle';
import CircleStyles from './CircleRoute.module.scss';

export default function CircleRoute() {
    return (
        <div className={CircleStyles.container}>
            <Circle />
        </div>
    );
}
