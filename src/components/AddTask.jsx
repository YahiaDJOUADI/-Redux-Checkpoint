import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../slices/TaskSlice';

const AddTask=()=>{
    const [description,setDescription]=useState("");
    const dispatch = useDispatch()
  
        const handleAddTask = () => {
            if (description) {
              const newTask = {
                // i use date.now to create id 
                id: Date.now(),
                description,
                isDone: false,
              };
              dispatch(addTask(newTask));
              setDescription('');
            }
          };
        
          return (
            <div className="flex flex-col items-center p-4 shadow-lg rounded-lg bg-gray-50 mb-6">
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg mb-4 w-80"
              placeholder="Enter a new task 🖊️"
            />
            <button
              onClick={handleAddTask}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none"
            >
              Add Task
            </button>
          </div>
          );
    }


export default AddTask