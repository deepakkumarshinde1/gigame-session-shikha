import { createSlice } from "@reduxjs/toolkit";
const WeatherSlice = createSlice({
  name: "WeatherSlice",
  initialState: {
    list: [],
  },
  reducers: {
    saveWeatherDetails(state, action) {
      state.list.push(action.payload);
    },
    getWeatherDetails() {},
  },
});

export default WeatherSlice;
export const { getWeatherDetails, saveWeatherDetails } = WeatherSlice.actions;
