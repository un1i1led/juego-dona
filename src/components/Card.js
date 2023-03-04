import React from 'react';

const Card = props => {
    return (
        <div className='card'>
            <p>{props.valid ? 'true' : 'false'}</p>
        </div>
    )
}

export default Card;