
import { useEffect } from 'react';


const Snowfall = () => {
  useEffect(() => {
    const createSnowflake = () => {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      snowflake.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random speed
      snowflake.style.opacity = `${Math.random()}`; // Random opacity

      document.body.appendChild(snowflake);

      // Remove the snowflake after it falls
      setTimeout(() => {
        snowflake.remove();
      }, 5000);
    };

    const interval = setInterval(createSnowflake, 100); // Create a snowflake every 100ms

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return null; // No visible component, just appending snowflakes to the DOM
};

export default Snowfall;