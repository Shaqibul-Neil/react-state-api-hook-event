import './App.css';
import Button from './Button';
import Counter from './Counter';
import Batsman from './Batsman';
import Users from './Users';
import Friends from './Friends';
import Posts from './Posts';
import { Suspense } from 'react';
//neil
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users').then(
  response => response.json()
);

const fetchFriends = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const json = await response.json();
  return json;
};

const fetchPosts = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await res.json();
  return json;
};

function App() {
  //async await krle promise banate hbe aivabe
  const friendsPromise = fetchFriends();
  const postPromise = fetchPosts();

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
      <Counter />
      <Batsman />
      <Suspense fallback={<h3>Posts are cooking...</h3>}>
        <Posts postPromise={postPromise} />
      </Suspense>
      <Suspense fallback={<h3>Loading.....</h3>}>
        <Users fetchUsers={fetchUsers} />
      </Suspense>
      <Suspense fallback={<h3>Friends are Coming....</h3>}>
        <Friends friendsPromise={friendsPromise} />
      </Suspense>
    </>
  );
}

export default App;
