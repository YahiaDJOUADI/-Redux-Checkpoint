import { Provider } from 'react-redux';
import store from './store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTasks';

const App = () => {
  return (
    <Provider store={store}>
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="max-w-4xl w-full p-14 bg-white rounded-lg shadow-xl">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">To-Do List 📃</h1>
        <AddTask />
        <ListTask />
      </div>
    </div>
  </Provider>

  );
};

export default App;
