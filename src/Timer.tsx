import { useEffect, useState } from "react";

function Timer() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    console.log("Mount");
    const intervalId = setInterval(() => {
      console.log("Interval:", intervalId);
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Unmount");
      clearInterval(intervalId);
    }
  }, []);

  return <p>{time.toLocaleTimeString()}</p>
}

export default Timer;