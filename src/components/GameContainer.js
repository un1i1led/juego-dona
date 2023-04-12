import React, { useState } from 'react';
import Card from './Card';
import {shirts, pants, shoes} from '../img/imgLink';

const GameContainer = props => {
    const [lostOrNo, setLostOrNo] = useState(false);

    const pickRandom = (arr) => {
      let randomIndex = Math.floor(Math.random() * arr.length);
      let randomObject = arr[randomIndex];

      return randomObject;
    }

    const pickClothing = () => {
      let clothing = pickRandom([shirts, pants, shoes]);
      return clothing;
    }

    const cardOrder = () => {
        const clothing = pickClothing();
        const cards = [];
        let validCardGenerated = false;
      
        for (let i = 1; i <= 9; i++) {
          let article = pickRandom(clothing);
          while (article.value !== false) {
            article = pickRandom(clothing);
          }

          const card = {
            id: i,
            valid: false,
            img: article.link
          };
      
          if (!validCardGenerated && Math.random() < 0.1) {
            card.valid = true;
            validCardGenerated = true;
            const img = clothing.find((obj) => obj.value === true);
            card.img = img.link;
          }
      
          cards.push(card);
        }
      
        if (!validCardGenerated) {
          const randomIndex = Math.floor(Math.random() * 9);
          cards[randomIndex].valid = true;
          const img = clothing.find((obj) => obj.value === true);
          cards[randomIndex].img = img.link;
        }
      
        return cards.map((card) => {
          return <Card key={card.id} id={card.id} valid={card.valid} 
          changeArray={changeArray} img={card.img}/>;
        });
      };
      
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
            <div className='cards'>
                {cardOrder()}
            </div>
        </div>
    )
}

export default GameContainer;