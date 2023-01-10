import { useState, useEffect } from 'react';

const useCounter = (sighn = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
    // setCounter((prevCounter) => `${prevCounter} ${sighn} ${1}`);
    // setCounter((prevCounter) => prevCounter + 1);
    // setCounter(counterUpdateFn());
      if (sighn) {
        setCounter((prevCounter) => prevCounter + 1);
      } else {
        setCounter((prevCounter) => prevCounter - 1);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return counter;
};

export default useCounter;