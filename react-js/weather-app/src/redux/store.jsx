import createSagaMiddleware from "redux-saga";
import WeatherSlice from "./weather.slice";
import { rootSaga } from "./saga/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

let store = configureStore({
  reducer: {
    weather: WeatherSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
