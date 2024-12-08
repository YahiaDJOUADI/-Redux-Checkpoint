import { createSlice } from "@reduxjs/toolkit";

const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [],
    filter: "all",
  },
  reducers: {
    /* all the functions here*/
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    toggleTask: (state, action) => {
      const task = state.tasks.find((task) => task.id == action.payload);
      if (task) {
        task.isDone = !task.isDone;
      }
    },
    deleteTask: (state, action) => {
        state.tasks = state.tasks.filter(task => task.id !== action.payload);
      },
    filterTasks: (state, action) => {
      state.filter = action.payload;
    },
    editTask: (state, action) => {
        const task = state.tasks.find(task => task.id === action.payload.id);
        if (task) {
          task.description = action.payload.description;
        }
    },
  },
});
export const { addTask, toggleTask,deleteTask,filterTasks,editTask}= taskSlice.actions
export default taskSlice.reducer