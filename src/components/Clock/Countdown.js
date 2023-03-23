import React, { useEffect, useState } from "react";
import "./Countdown.scss";

function Countdown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-4-15`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <div className="value">
        <div className="num">{timeLeft[interval]}{" "} </div>
        <div className="text">{interval}{" "}</div>
      </div>

    );
  });
  return (
    <div className="countdown">
      <h1>STARTS IN</h1>
      <div className="value_box">{timerComponents.length ? timerComponents : <span>HAPPENING NOW!</span>}</div>
    </div>
  );
}

export default Countdown;