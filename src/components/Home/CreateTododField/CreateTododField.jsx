import React, { useState } from 'react';

export default function CreateTododField({ setTodos, todos }) {
  const [title, setTitle] = useState('');

  const addTodo = (title) => {
    setTodos([{
      id: new Date(),
      title,
      isCompleted: false,
    },
    ...todos,
    ]);
    setTitle('');
  };

  return (
    <div className="flex items-center justify-between mb-3 rounded-2xl border-neutral-800 border-2 px-5 py-2 w-full mt-5">
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
        className="bg-transparent w-full border-none outline-none text-lg"
        placeholder="Ådd å tåsk"
      />
    </div>
  );
}
