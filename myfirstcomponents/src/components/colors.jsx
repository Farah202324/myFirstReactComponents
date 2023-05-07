import React, { useState } from "react";

const Color = () => {
  const [color, setColor] = useState('red');
  const colors = ['red', 'yellow', 'green', 'blue'];
  const changeColor = (selectedColor) => {
    setColor(selectedColor);
  };
  return (
    <div className="colors-container">
      {colors.map((selectedColor) => (
        <button
        id="colorBtn"
          key={selectedColor}
          className={selectedColor}
          style={{ backgroundColor: selectedColor }}
          onClick={() => changeColor(selectedColor)}
        >
          {selectedColor}
        </button>
      ))}
      <div className="colors-display" style={{ backgroundColor: color, width: '200px', height: '200px', marginTop: '20px', borderRadius:'50%'}}>
        Current color: {color}
      </div>
    </div>
  );
};




export default Color;