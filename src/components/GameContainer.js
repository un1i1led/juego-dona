import React, { useEffect, useState } from 'react';
import Card from './Card';

const GameContainer = props => {
    const [lostOrNo, setLostOrNo] = useState(false);

    const cardOrder = () => {
        const cards = [];
        let validCard = false;

        for (let i = 1; i <= 9; i++) {
            const card = {
                id: i,
                valid: false
            }

            if (i === Math.floor(Math.random() * 9) + 1) {
                card.valid = true;
            }

            cards.push(card);
        }

        if (!validCard) {
            const randomIndex = Math.floor(Math.random() * 9);
            cards[randomIndex].valid = true;
          }

        return (
            cards.map((card) => {
                return <Card key={card.id} id={card.id} valid={card.valid} changeArray={changeArray}/>
            })
        )
    }

    const changeArray = (valid) => {
        if (valid === false) {
            props.updateState('score', 0);
            setLostOrNo(true);
        } else {
            props.updateState('score', props.score + 1);
            if (lostOrNo) {
                setLostOrNo(false);
            }
        }
    }

    return (
        <div className='game-container'>
            {cardOrder()}
        </div>
    )
}

export default GameContainer;