import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  url: {},
  gerns: {},
}

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    getApiConfiguration: (state, { payload }) => {
      state.url = payload;
    },
    getGerns: (state, { payload }) => {
      state.gerns = payload;
    }
  }
});

export const { getApiConfiguration, getGerns, increment } = homeSlice.actions
export default homeSlice.reducer;