import React, { useEffect, useState } from "react";

const FlashCounter = ({ initialHours = 1 }) => {
  const [timeLeft, setTimeLeft] = useState(initialHours * 60 * 60);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flash-sale-counter">
      <h2 className="text-white text-xl font-bold">Flash Sale ends in:</h2>
      <div className="counter text-3xl text-black ">{formatTime(timeLeft)}</div>
    </div>
  );
};

export default FlashCounter;
