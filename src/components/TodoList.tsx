import React from 'react';
import { ITodo } from '../interfaces';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: ITodo[];
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const TodoList: React.FC<TodoListProps> = ({ todos, onToggle, onDelete, onEdit }) => {
  return (
    <ul>
      {todos.map(todo => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
};