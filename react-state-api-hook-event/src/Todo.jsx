import { useEffect, useState } from 'react';

const Todo = () => {
  const [todos, setToDo] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setToDo(data);
      });
  }, []);
  return (
    <div className="counter">
      <h4>ToDo's {todos.length}</h4>
      <ul className="ul">
        {todos.map(todo => {
          return (
            <li
              key={todo.id}
              style={{ color: todo.completed ? 'green' : 'red' }}
            >
              {todo.completed ? '✅' : '❌'} {todo.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
