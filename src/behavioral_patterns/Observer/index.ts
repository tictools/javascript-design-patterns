import HumidityDisplay from "./displays/HumidityDisplay";
import TemperatureDisplay from "./displays/TemperatureDisplay";
import WeatherStation from "./stations/WeatherStation";
import WeatherData from "./WeatherData";

const weatherData = new WeatherData();
const station = new WeatherStation(weatherData);

const humidityDisplay = new HumidityDisplay();
const temperatureDisplay = new TemperatureDisplay();

station.subscribe(humidityDisplay);
station.subscribe(temperatureDisplay);

station.startProcess();
