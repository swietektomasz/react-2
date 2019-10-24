import React, { useState } from 'react';

function TimerGame() {
  const [text, setText] = useState('Starting the game!');
  setTimeout(() => {
    setText('Game Over');
  }, 5000);

  return (<div><p>{text}</p></div>);
}

export default TimerGame;
