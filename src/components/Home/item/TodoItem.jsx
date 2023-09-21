import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import Check from './Check';

export default function TodoItem({ todo, changeTodo, removeTodo }) {
  return (
    <div
      className="flex items-center justify-between mb-3 rounded-2xl bg-neutral-800 p-5 w-full"
    >
      <button type="button" className="flex items-center" onClick={() => changeTodo(todo.id)}>
        <Check isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? 'line-through' : ''}`}>
          {todo.title}
        </span>
      </button>
      <button type="button">
        <FaTrashAlt onClick={() => removeTodo(todo.id)} size={22} className="text-gray-500 hover:text-red-900 transition-colors ease-in-out duration-500" />
      </button>
    </div>

  );
}
