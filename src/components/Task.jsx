import { useSelector, useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../slices/TaskSlice';
import { useState } from 'react';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false); 
  const [newDescription, setNewDescription] = useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    if (newDescription.trim() !== '') {
      dispatch(editTask({ id: task.id, description: newDescription }));
      setIsEditing(false);
    }
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50 rounded-lg">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={task.isDone}
          onChange={handleToggle}
          className="h-5 w-5"
        />
        {isEditing ? (
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            className="border border-gray-300 p-2 rounded-lg"
          />
        ) : (
          <span className={task.isDone ? 'line-through text-green-600' : ''}>
            {task.description}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={() => {
            if (isEditing) handleEdit();
            else setIsEditing(true);
          }} 
          className="text-xl transition-all duration-300 hover:text-yellow-600"
        >
          {isEditing ? '💾' : '✏️'} 
        </button>
        <button
          onClick={handleDelete}
          className="text-xl transition-all duration-300 hover:text-red-700"
        >
          🗑️ 
        </button>
      </div>
    </div>
  );
};

export default Task;
