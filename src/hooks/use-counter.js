import { useState, useEffect } from 'react';

const useCounter = (sighn = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {

      if (sighn) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [sighn]);

  return counter;
};

export default useCounter;