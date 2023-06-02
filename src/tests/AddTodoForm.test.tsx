// src/tests/AddTodoForm.test.tsx
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import AddTodoForm from '../components/AddTodoForm';

test('calls addTodo when the form is submitted', () => {
  const addTodo = jest.fn();

  const { getByPlaceholderText, getByRole } = render(<AddTodoForm addTodo={addTodo} />);

  const input = getByPlaceholderText('Add a todo...');
  const button = getByRole('button');

  fireEvent.change(input, { target: { value: 'Test todo' } });
  fireEvent.click(button);

  expect(addTodo).toHaveBeenCalledWith('Test todo');
});

export {}