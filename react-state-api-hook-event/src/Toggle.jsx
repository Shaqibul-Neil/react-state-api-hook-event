import { useState } from 'react';

const Toggle = () => {
  const [isVisible, setVisible] = useState(false);
  const handleVisible = () => {
    setVisible(prev => !prev);
  };
  const toggleBtn = isVisible ? 'Hide' : 'Show';
  const toggleText = isVisible ? 'Hello React Learner' : '';
  return (
    <div>
      <h4>Show/Hide Text</h4>
      <button onClick={handleVisible}>{toggleBtn}</button>
      <p>{toggleText}</p>
    </div>
  );
};

export default Toggle;
