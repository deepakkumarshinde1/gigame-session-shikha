import { takeLatest } from "redux-saga/effects";
import { getWeatherDetailsHandler } from "./weather.handler";
import { getWeatherDetails } from "../weather.slice";

export function* getWeatherDetailsWatcher() {
  yield takeLatest(getWeatherDetails.type, getWeatherDetailsHandler);
}
