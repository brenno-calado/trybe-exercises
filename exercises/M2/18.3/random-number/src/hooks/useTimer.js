import { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0);
  const [randomNumber, setRandomNumber] = useState(null);

  const min = 1;
  const max = 100;
  
  const isMultiple = randomNumber && (randomNumber % 3 === 0 || randomNumber % 5 === 0);

  useEffect(() => {
    const timeInterval = setInterval(() => {
      const newTimer = timer + 1
      const mod10 = newTimer > 0 && newTimer % 10;
      if(mod10 === 0) {
        setRandomNumber(Math.round(Math.random() * (max - min) + min));
      }
      setTimer(newTimer);
    }, 1000);

    return () => {
      clearInterval(timeInterval);
    }
  }, [timer])

  useEffect(() => {
    if(isMultiple) {
      setTimeout(() => {
        setRandomNumber(null);
      }, 4000)
    }
  }, [randomNumber, isMultiple])

  return { 
    timer, 
    randomNumber, 
    isMultiple,
  }
}

export default useTimer;