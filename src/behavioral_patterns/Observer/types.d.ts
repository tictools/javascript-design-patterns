export interface StationSubscriber {
  update: (data: WeatherData) => void;
}
