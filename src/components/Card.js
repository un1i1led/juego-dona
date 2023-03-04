import React from 'react';

const Card = props => {
    return (
        <div className='card' onClick={() => {props.changeArray(props.valid)}}>
            <p>{props.valid ? 'true' : 'false'}</p>
        </div>
    )
}

export default Card;