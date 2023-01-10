import { useState, useEffect } from 'react';

const useCounter = (props) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => `${prevCounter} ${props.sighn} ${1}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);
};

export default useCounter;