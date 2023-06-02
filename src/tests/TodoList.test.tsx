// src/tests/TodoList.test.tsx
import React from 'react';
import { render } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { Todo } from '../types';

test('renders the todo items', () => {
  const todos: Todo[] = [
    { id: 1, text: 'Test todo 1', completed: false },
    { id: 2, text: 'Test todo 2', completed: true },
  ];
  const toggleTodo = jest.fn();

  const { getByText } = render(<TodoList todos={todos} toggleTodo={toggleTodo} />);

  todos.forEach((todo) => {
    expect(getByText(todo.text)).toBeInTheDocument();
  });
});

export {}