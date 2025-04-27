let API_KEY = "417e5e47e007f7938b48ffa2581405b0";

export function getWeatherDetailsService(city) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
  return fetch(url);
}
