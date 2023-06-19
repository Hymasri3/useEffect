import React, { useState, useEffect } from "react";
function FComponent() {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("functional Component");

  useEffect(() => {
    console.log("component is mounted or updated");
  });

  const showDate = () => {
    setTime(new Date().toString());
  };
  return (
    <div>
      <h1>{time}</h1>
      <button onClick={showDate}>show Date</button>
    </div>
  );
}
export default FComponent;
