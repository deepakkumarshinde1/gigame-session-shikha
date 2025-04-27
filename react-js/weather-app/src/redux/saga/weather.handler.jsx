import { call, put } from "redux-saga/effects";
import { getWeatherDetailsService } from "./weather.service";
import { saveWeatherDetails } from "../weather.slice";

export function* getWeatherDetailsHandler(action) {
  let response = yield call(getWeatherDetailsService, action.payload);
  let data = yield response.json();
  yield put(saveWeatherDetails(data));
}
