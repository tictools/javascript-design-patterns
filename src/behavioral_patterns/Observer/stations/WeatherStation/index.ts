import { webcrypto } from "crypto";
import WeatherData from "../../WeatherData";
import StationPublisher from "../StationPublisher";

export default class WeatherStation extends StationPublisher {
  private weatherData: WeatherData;

  constructor(weatherData: WeatherData) {
    super();
    this.weatherData = weatherData;
  }

  private randomValue(): number {
    const [randomValue] = webcrypto.getRandomValues(new Int8Array(1));
    return randomValue;
  }

  private udpateTemperatureByInterval() {
    setInterval(() => {
      this.weatherData.updateTemperature(this.randomValue());
      this.notifySubscribers(this.weatherData);
    }, 1000);
  }

  private udpateHumidityByInterval() {
    setInterval(() => {
      this.weatherData.updateHumidity(this.randomValue());
      this.notifySubscribers(this.weatherData);
    }, 1500);
  }

  private updateValues() {
    this.udpateTemperatureByInterval();
    this.udpateHumidityByInterval();
  }

  startProcess(): void {
    this.updateValues();
  }
}
