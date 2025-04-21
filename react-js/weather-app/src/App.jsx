import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherDetails } from "./redux/weather.slice";

function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getWeatherDetails());
  });
  return <div>App</div>;
}

export default App;
