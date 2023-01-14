import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from "../ToDoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer,
  },
});

export default store;
