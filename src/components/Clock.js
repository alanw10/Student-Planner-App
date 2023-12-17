import React, { useEffect, useState } from "react";

function Clock() {
  const [clockState, setClockState] = useState();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      setClockState(date.toLocaleTimeString());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div style={{ fontSize: "25px", margin: "25px", color: "#fff" }}>
      Time: {clockState}
    </div>
  );
}

export default Clock;
