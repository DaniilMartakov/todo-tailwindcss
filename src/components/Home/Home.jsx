import React, { useState } from 'react';
import TodoItem from './item/TodoItem';
import CreateTododField from './CreateTododField/CreateTododField';

const data = [
  {
    id: 1,
    title: 'Finish the essay collaboretion',
    isCompleted: false,
  },
  {
    id: 2,
    title: 'Read next chapter of the book',
    isCompleted: false,
  },
  {
    id: 3,
    title: 'Send the finisher assigment',
    isCompleted: false,
  },
];

export default function Home() {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className="text-yellow-100 w-4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Tødø før Mę</h1>
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          changeTodo={changeTodo}
          removeTodo={removeTodo}
        />
      ))}
      <CreateTododField todos={todos} setTodos={setTodos} />
    </div>
  );
}
