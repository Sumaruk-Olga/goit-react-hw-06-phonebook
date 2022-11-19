import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = {
  contacts:[
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ],
};

const persistConfig = {
  key: 'contacts',
  storage,
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState: contactsInitialState,
  reducers: {
    toggleCompleted(state, action) {
      state.contacts.map(item=>{
            if(item.id===action.payload){
              return item.completed = !item.completed;
            }else{
              return item;
            }})         
    },
  },
});

export const { toggleCompleted } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
export const persistContactsReducer = persistReducer(persistConfig, contactsReducer);