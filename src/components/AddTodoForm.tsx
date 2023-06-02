// src/components/AddTodoForm.tsx
import React, { useState } from 'react';

interface AddTodoFormProps {
  addTodo: (text: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-2">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow mr-2"
        placeholder="Add a todo..."
      />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
        Add
      </button>
    </form>
  );
};

export default AddTodoForm;
