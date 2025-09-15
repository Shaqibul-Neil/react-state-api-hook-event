import { useState } from 'react';

const Counter = function () {
  const [count, setCount] = useState(0); //useState(initialState)
  const handleAdd = () => {
    setCount(prevCount => prevCount + 1);
    // const newCount = count + 1;
    // setCount(newCount);
  };
  return (
    <div className="counter">
      <h3>Count: {count}</h3>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default Counter;
