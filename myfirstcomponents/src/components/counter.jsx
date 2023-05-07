import React, { useState } from "react";


const Counter = ({ initialCount }) => {
  const [count, setCount] = useState(initialCount);

  return (
    <div className="counter-container">
      <div className="counter">Count: {count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(initialCount)}>Reset</button>
        <button onClick={() => setCount((prevCount) => prevCount - 1)}>-</button>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>+</button>
      </div>
    </div>
  );
};

export default Counter;
