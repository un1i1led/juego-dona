import React from 'react';

const Card = props => {
    return (
        <div className='card' onClick={() => {props.changeArray(props.valid)}}>
            <img className='card-img' src={props.img}/>
        </div>
    )
}

export default Card;