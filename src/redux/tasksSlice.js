import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const tasksInitialState = {
  0:{ id: 0, text: "Learn HTML and CSS", completed: true },
  1:{ id: 1, text: "Get good at JavaScript", completed: true },
  2:{ id: 2, text: "Master React", completed: false },
  3:{ id: 3, text: "Discover Redux", completed: false },
  4:{ id: 4, text: "Build amazing apps", completed: false },
};

const persistConfig = {
  key: 'tasks',
  storage,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    toggleCompleted(state, action) {
      Object.values(state).map(item=>{
        if(item.id===action.payload){
          return item.completed = !item.completed;
        }else{
          return item;
        }})      
    },
  },
});

export const { toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
export const persistTasksReducer = persistReducer(persistConfig, tasksReducer);