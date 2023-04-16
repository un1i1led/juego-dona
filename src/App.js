import React, { useState, useEffect } from 'react';
import GameContainer from './components/GameContainer';
import Nav from './components/Nav';
import TopBar from './components/Topbar';
import './style.css';

const App = () => {
  const [bestScore, setBestScore] = useState(0);
  const [score, setScore] = useState(0);

  const updateState = (state, value) => {
    if (state === 'score') {
      setScore(value);
      if (bestScore <= value) {
        setBestScore(value);
        localStorage.setItem('bestScore', value);
      }
    }
  };

  useEffect(() => {
    let bestScore = localStorage.getItem('bestScore');
    setBestScore(bestScore);
  }, []);

  return (
    <div className='App'>
      <Nav/>
      <TopBar score={score} bestScore={bestScore}/>
      <div className='main'>
        <GameContainer score={score} updateState={updateState}/>
      </div>
      <div className='info'>
        <div className='somos info-div'>
          <h2>¿Qué es DonaLoBien?</h2>
          <p>Es un proyecto educativo que busca fomentar la cultura de la donación de ropa en buen estado. 
              Nuestra misión es concientizar sobre la importancia de donar aquellos artículos que ya no utilizamos 
              pero que aún pueden ser útiles para alguien más.</p>
        </div>
        <div className='funciona info-div'>
          <h2>¿Cómo funciona el juego?</h2>
          <p>El juego funciona de manera que se te presentan opciones de articulos de ropa que no estan en buen
              estado y articulos de ropa que si lo estan, tu trabajo es escoger los articulos que si esten en 
              buena condicion para donar e intentar obtener el puntaje mas alto que puedas.
          </p>
        </div>
        <div className='bred info-div'>
          <h2>¿Quien es el BRED?</h2>
          <p>Es un banco de ayuda para centralizar donaciones de ropa, calzado y artículos para el hogar.
              Los artículos donados son recolectados, ordenados, separados y clasificados profesionalmente, 
              y luego distribuidos de manera organizada y eficiente a las familias más necesitadas de la comunidad.
          </p>
        </div>
      </div>
    </div>
  )

}

export default App;
