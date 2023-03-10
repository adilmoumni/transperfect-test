import { useState, useEffect } from "react";

function Timer({ second }) {
  const [time, setTime] = useState(second);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const minuteLeft = Math.floor(time / 60);
  const secondLeft = time % 60;

  return (
    <div>
      {time > 0 ? (
        <div>
            <h1> seconds :  {second} </h1>
          <h1> {minuteLeft.toString().padStart(2, 0)}:{secondLeft.toString().padStart(2, 0)} </h1>
        </div>
      ) : (
        <h1>Time's up!</h1>
      )}
    </div>
  );
}

export default Timer;
