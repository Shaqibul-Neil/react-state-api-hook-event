import { useState } from 'react';

const SecondCounter = () => {
  const [counter, setCounter] = useState(0);
  const handleIncrease = () => {
    setCounter(prevCount => prevCount + 1);
  };
  const handleDecrease = () => {
    setCounter(prevCount => prevCount - 1);
  };
  const handleReset = () => {
    setCounter(0);
  };
  return (
    <div>
      <h4>Count: {counter}</h4>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default SecondCounter;
