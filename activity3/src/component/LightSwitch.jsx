import React, { useState } from 'react';

const LightSwitch = () => {
  const [isLightOn, setLight] = useState(false);

  const toggler = () => {
    setLight(!isLightOn);
  };

  const backgroundColor = isLightOn ? '#fff' : '#333'; 
  const textColor = isLightOn ? '#000' : '#fff'; 

  return (
    <div style={{ backgroundColor, color: textColor, height: '100vh', transition: 'background-color 0.5s' }}>
      {/* Button to toggle the light on and off */}
      <button onClick={toggler} style={{ padding: '10px 20px', fontSize: '16px' }}>
        {isLightOn ? 'Turn Off' : 'Turn On'} Light
      </button>

      {/* Displaying the status of the light */}
      <p>{isLightOn ? 'The light is ON' : 'The light is OFF'}</p>
    </div>
  );
};

export default LightSwitch;
