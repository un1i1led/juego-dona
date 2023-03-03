import React, { useState } from 'react';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  const updateState = (state, value) => {
    if (state == 'score') {
      setScore(value);
      if (bestScore <= value) {
        setBestScore(value);
      }
    }
  };

  return (
    <div className='App'>

    </div>
  )

}

export default App;
