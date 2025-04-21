const { createSlice } = require("@reduxjs/toolkit");

const WeatherSlice = createSlice({
  name: "WeatherSlice",
  initialState: {
    list: [],
  },
  reducers: {
    saveWeatherDetails() {},
    getWeatherDetails() {},
  },
});

export default WeatherSlice;
export const { getWeatherDetails, saveWeatherDetails } = WeatherSlice.actions;
