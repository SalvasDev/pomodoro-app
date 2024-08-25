import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from '../features/tasks/taskSlice';
import sessionsReducer from '../features/sessions/sessionSlice';
import { saveTasksToLocalStorage } from "../middlewares/saveTasksMiddleware";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    sessions: sessionsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(saveTasksToLocalStorage),
});

export default store;
