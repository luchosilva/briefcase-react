import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [width, setWidth] = useState(1920);

  useEffect(() => {
    if (width === 1920) handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleResize = () => setWidth(window.innerWidth);

  return { width };
};

export default useScreenSize;
