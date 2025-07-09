import { useEffect, useState } from 'react';

function RotatingText({ texts, interval = 2000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, interval);
    return () => clearInterval(id); // cleanup
  }, [texts, interval]);

  return (
    <span className="rotating-text">
      {texts[index]}
    </span>
  );
}

export default RotatingText;
