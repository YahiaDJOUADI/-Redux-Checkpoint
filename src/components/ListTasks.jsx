import { useSelector, useDispatch } from 'react-redux';
import { filterTasks } from '../slices/TaskSlice';
import Task from './Task';

const ListTask = () => {
  const { tasks, filter } = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter =='done') return task.isDone;
    if (filter =='notDone') return !task.isDone;
    return true; 
  });

  return (
    <div className="p-4  rounded-lg shadow-lg">
    <div className="flex justify-center space-x-4 mb-6  shadow-xl py-5">
      <button
        onClick={() => dispatch(filterTasks('all'))}
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-400"
      >
        All
      </button>
      <button
        onClick={() => dispatch(filterTasks('done'))}
        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
      >
        Done
      </button>
      <button
        onClick={() => dispatch(filterTasks('notDone'))}
        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
      >
        Not Done
      </button>
    </div>
    <div className="space-y-4">
      {filteredTasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  </div>
  );
};

export default ListTask;
