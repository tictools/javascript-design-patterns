import { StationSubscriber } from "../../types";
import WeatherData from "../../WeatherData";

export default class TemperatureDisplay implements StationSubscriber {
  update(data: WeatherData) {
    const temperatureHistory = data.getTemperatureHistory();
    const lastIndex = temperatureHistory.length - 1;

    const lastTemperatureValue = temperatureHistory[lastIndex];
    const secondLastTemperatureValue = temperatureHistory[lastIndex - 1];

    if (lastTemperatureValue !== secondLastTemperatureValue)
      console.log(
        `\n🌡️ Temperature Display :: update :: ${lastTemperatureValue}ºC\n`
      );
  }
}
