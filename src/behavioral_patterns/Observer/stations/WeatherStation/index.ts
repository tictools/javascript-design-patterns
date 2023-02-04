import WeatherData from "../../WeatherData";
import StationPublisher from "../StationPublisher";

export default class WeatherStation extends StationPublisher {
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    super();
    this.weatherData = weatherData;
  }

  private udpateTemperatureByInterval() {
    setInterval(() => {
      const randomTemperatureAsString = (Math.random() * 30).toFixed(1);
      this.weatherData.updateTemperature(Number(randomTemperatureAsString));
      this.notifySubscribers(this.weatherData);
    }, 4000);
  }

  private udpateHumidityByInterval() {
    setInterval(() => {
      const randomHumidity = Math.floor(Math.random() * 100);
      this.weatherData.updateHumidity(randomHumidity);
      this.notifySubscribers(this.weatherData);
    }, 5000);
  }

  private updateValues() {
    this.udpateTemperatureByInterval();
    this.udpateHumidityByInterval();
  }

  startProcess(): void {
    this.updateValues();
  }
}
