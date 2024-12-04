import React, { useState, useMemo } from 'react';
import Child from './Child';

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h1>Parent Component</h1>
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment Counter</button>
      <Child todos={memoizedTodos} addTodo={addTodo} />
    </div>
  );
};

export default App;
