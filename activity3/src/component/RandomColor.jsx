import React, { useState, useEffect } from 'react';

const RandomColor = () => {
  const [color, setColor] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setColor(`#${Math.floor(Math.random() * 16777215).toString(16)}`);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: color, padding: '20px', color: '#fff' }}>
      <p>Background Color: {color}</p>
    </div>
  );
};

export default RandomColor;
