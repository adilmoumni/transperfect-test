import React, { useState } from "react";
import "./../index.css";

function NumberGame() {
  const [number, setNumber] = useState(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [tries, setTries] = useState(0);

  const handleGuess = () => {
    const numGuess = parseInt(guess, 10);
    setTries(tries + 1);
    if (numGuess === number) {
      setMessage("You win!");
    } else if (numGuess > number) {
      setMessage("Try again! Your guess was too high.");
    } else {
      setMessage("Try again! Your guess was too low.");
    }
    setGuess("");
  };

  const handleChange = (e) => {
    setGuess(e.target.value);
  };

  const restart = () => {
    setNumber(Math.floor(Math.random() * 100) + 1);
    setMessage("");
    setTries(0);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleChange(e);
      message !== "You win!" ? handleGuess() : restart();
    }
  };

  return (
    <div className="container">
      <h2 className="title">Guess the number!</h2>
      <p className="subtitle">Guess a number between 1 and 100:</p>
      <input
        className="input"
        type="number"
        value={guess}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <center>
        {message === "You win!" ? (
          <button className="button-restart" onClick={restart}>
            Restart
          </button>
        ) : (
          <button className="button-guess" onClick={handleGuess}>
            Guess
          </button>
        )}
      </center>

      <p className={message === "You win!" ? "message win" : "message"}>
        {message}
      </p>
      <p className="tries">Tries: {tries}</p>
    </div>
  );
}

export default NumberGame;
