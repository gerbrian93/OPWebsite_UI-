import React, { useEffect, useState } from 'react';

const MeteorShower = () => {
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    const createMeteor = () => {
      const xPosition = Math.random() * window.innerWidth;
      const yPosition = Math.random() * window.innerHeight / 3; // only from top third of the screen
      setMeteors((prevMeteors) => [...prevMeteors, { x: xPosition, y: yPosition }]);
    };

    const intervalId = setInterval(createMeteor, 2000); // creates a meteor every 2 seconds
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {meteors.map((meteor, index) => (
        <div
          key={index}
          className="meteor"
          style={{
            top: meteor.y,
            left: meteor.x,
          }}
        />
      ))}
    </div>
  );
};

export default MeteorShower;
