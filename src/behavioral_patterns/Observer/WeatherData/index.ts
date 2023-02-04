export default class WeatherData {
  private temperature: number[];
  private humidity: number[];

  constructor() {
    this.temperature = [];
    this.humidity = [];
  }

  public getTemperatureHistory() {
    return this.temperature;
  }
  public getHumidityHistory() {
    return this.humidity;
  }

  public updateTemperature(temperature: number) {
    this.temperature.push(temperature);
  }

  public updateHumidity(humidity: number) {
    this.humidity.push(humidity);
  }
}
