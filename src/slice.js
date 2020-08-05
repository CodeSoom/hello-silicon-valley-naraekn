import { createSlice } from '@reduxjs/toolkit';

const { actions, reducer } = createSlice({
  name: 'application',
  initialState: {
    currentTest: 0,
  },
  reducers: {
    setCurrentTest(state, { payload: currentTest }) {
      return {
        ...state,
        currentTest,
      };
    },
  },
});

export const {
  setCurrentTest,
} = actions;

export default reducer;
