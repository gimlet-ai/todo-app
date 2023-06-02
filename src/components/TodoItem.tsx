// src/components/TodoItem.tsx
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <div className="flex items-center justify-between p-2 border-b">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="mr-2"
      />
      <p className={todo.completed ? 'line-through' : ''}>{todo.text}</p>
    </div>
  );
};

export default TodoItem;
