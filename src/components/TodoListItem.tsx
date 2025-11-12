import React from 'react';
import { ITodo } from '../interfaces';

interface TodoListItemProps {
  todo: ITodo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
}

export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = React.useState(false);
  const [newText, setNewText] = React.useState(todo.text);

  const handleEdit = () => {
    onEdit(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <input
          type="text"
          value={newText}
          onChange={(e) => setNewText(e.target.value)}
        />
      ) : (
        <span
          className={`text ${todo.completed ? 'completed' : ''}`}
          onClick={() => onToggle(todo.id)}
        >
          {todo.text}
        </span>
      )}
      {isEditing ? (
        <button onClick={handleEdit} className="save">Save</button>
      ) : (
        <button onClick={() => setIsEditing(true)} className="edit">Edit</button>
      )}
      <button onClick={() => onDelete(todo.id)} className="delete">Delete</button>
    </li>
  );
};