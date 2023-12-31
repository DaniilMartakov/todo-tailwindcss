import React from 'react';
import { BsCheckLg } from 'react-icons/bs';

export default function Check({ isCompleted }) {
  return (
    <div className={`border-2 rounded-lg border-pink-400 ${isCompleted ? 'bg-pink-400' : ''} w-7 h-7 mr-3 flex items-baseline justify-center`}>
      {isCompleted
      && <BsCheckLg size={24} className="text-gray-900" />}
    </div>
  );
}
