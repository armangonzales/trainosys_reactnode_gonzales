import React, { useState } from 'react';

const ColorPicker = () => {
  const [color, setColor] = useState('red');

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div>
      {/* Dropdown to select a color */}
      <select onChange={handleColorChange} value={color}>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="purple">Purple</option>
      </select>

      {/* Displaying the selected color */}
      <div
        style={{
          marginTop: '20px',
          width: '100px',
          height: '100px',
          backgroundColor: color,
        }}
      >
        {color}
      </div>
    </div>
  );
};

export default ColorPicker;
