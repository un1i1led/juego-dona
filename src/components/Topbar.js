import React from 'react';

const TopBar = props => {
    return (
        <div className='top-bar'>
            <div>
                <p>Mejor puntaje: {props.bestScore}</p>
            </div>
            <div>
                <p>Puntaje: {props.score}</p>
            </div>
        </div>
    )
}

export default TopBar;