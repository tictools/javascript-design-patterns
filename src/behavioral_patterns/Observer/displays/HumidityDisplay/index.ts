import { StationSubscriber } from "../../types";
import WeatherData from "../../WeatherData";

export default class HumidityDisplay implements StationSubscriber {
  update(data: WeatherData) {
    const humidityHistory = data.getHumidityHistory();
    const lastIndex = humidityHistory.length - 1;

    const lastHumidityValue = humidityHistory[lastIndex];
    const secondLastHumidityValue = humidityHistory[lastIndex - 1];

    if (lastHumidityValue !== secondLastHumidityValue)
      console.log(
        `\n🌡️ Temperature Display :: update :: ${lastHumidityValue}ºC\n`
      );
  }
}
