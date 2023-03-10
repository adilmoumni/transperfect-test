import React, { useState } from 'react';

function NumberGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    if (numGuess === number) {
      setMessage('You win!');
    } else if (numGuess > number) {
      setMessage('Try again! Your guess was too high.');
    } else {
      setMessage('Try again! Your guess was too low.');
    }
    setGuess('');
  };

  const handleChange = e => {
    setGuess(e.target.value);
  };

  return (
    <div>
      <h2>Guess the number!</h2>
      <p>Guess a number between 1 and 100:</p>
      <input type="number" value={guess} onChange={handleChange} />
      <button onClick={handleGuess}>Guess</button>
      <p className={message === 'You win!' ? 'win' : ''}>{message}</p>
    </div>
  );
}

export default NumberGame;
