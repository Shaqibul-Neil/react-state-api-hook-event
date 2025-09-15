import './App.css';
import Button from './Button';

function App() {
  const handleClick = () => alert("I'm clicked");

  const handleAdd5 = num => {
    const newNum = num + 5;
    alert(newNum);
  };
  const multiply = (a, b) => alert(a * b);

  return (
    <>
      <Button onClick={handleClick} />
      <Button />
      {/* parameter sending in function */}
      {/* wrap it up in another arrow function */}
      <button onClick={() => handleAdd5(7)}>Click Me Num</button>
      <button onClick={() => multiply(5, 7)}>Click to multiply</button>
    </>
  );
}

export default App;
