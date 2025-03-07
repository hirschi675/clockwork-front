import "./Details.css"
import { useState, useEffect, ReactEventHandler } from 'react';

function TimerDetails() {
  const [clockedIn, setClockedIn] = useState(false);
  const [time, setTime] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const toggleClockedIn = () => {
    setClockedIn((prev) => !prev);
  };

  useEffect(() => {
    if (clockedIn) {
      const interval = setInterval(() => {
        setTime((prevTime) => {
          let { hours, minutes, seconds } = prevTime;

          seconds += 1;
          if (seconds === 60) {
            seconds = 0;
            minutes += 1;
          }
          if (minutes === 60) {
            minutes = 0;
            hours += 1;
          }

          return { hours, minutes, seconds };
        });
      }, 1000);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [clockedIn]); // Re-run when `clockedIn` changes

  return (
    <div className="container">
      <div>Timer</div>
      <div className="timer-wrapper">
        <div className="circular-progress">
          <div className="inner-circle"></div>
          <p className="percentage">
            {`${String(time.hours).padStart(2, "0")}:${String(time.minutes).padStart(2, "0")}:${String(time.seconds).padStart(2, "0")}`}
          </p>
        </div>
        <div className="clock-status-wrapper">
          <label className="check-ball">
            <input type="checkbox" id="clock-status" onClick={toggleClockedIn} />
            <span className="fill"></span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default TimerDetails;