import { all } from "redux-saga/effects";
import { getWeatherDetailsWatcher } from "./weather.watcher";

export function* rootSaga() {
  let array = [getWeatherDetailsWatcher()];
  yield all(array);
}
