import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { counter: 0 };

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increaseBy20(state, action) {
      state.counter = state.counter + action.payload;
    },
  },
});

const store = configureStore({ reducer: counterSlice.reducer });

export const counterAction = counterSlice.actions;

export default store;
