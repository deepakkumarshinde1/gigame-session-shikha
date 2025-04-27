import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getWeatherDetails } from "./redux/weather.slice";

function App() {
  let dispatch = useDispatch();
  const handelChange = (event) => {
    if (event.keyCode === 13 && event.target.value.length > 0) {
      dispatch(getWeatherDetails(event.target.value));
    }
  };
  return (
    <div>
      <input type="text" onKeyUp={handelChange} />
    </div>
  );
}

export default App;
