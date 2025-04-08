import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
  name: "CounterSlice",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    reset() {},
  },
});

export default CounterSlice;
export const { increment, reset } = CounterSlice.actions;
