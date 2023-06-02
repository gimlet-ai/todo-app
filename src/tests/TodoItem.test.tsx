// src/tests/TodoItem.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { Todo } from '../types';

test('renders the todo item', () => {
  const todo: Todo = { id: 1, text: 'Test todo', completed: false };
  const toggleTodo = jest.fn();

  const { getByText, getByRole } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

  expect(getByText(todo.text)).toBeInTheDocument();
  expect(getByRole('checkbox')).not.toBeChecked();
});

test('calls toggleTodo when the checkbox is clicked', () => {
  const todo: Todo = { id: 1, text: 'Test todo', completed: false };
  const toggleTodo = jest.fn();

  const { getByRole } = render(<TodoItem todo={todo} toggleTodo={toggleTodo} />);

  fireEvent.click(getByRole('checkbox'));

  expect(toggleTodo).toHaveBeenCalledWith(todo.id);
});

export {}