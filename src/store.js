import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './slices/TaskSlice';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
  },
});

export default store;
