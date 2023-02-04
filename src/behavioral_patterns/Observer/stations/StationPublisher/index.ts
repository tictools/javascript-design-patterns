import { StationSubscriber } from "../../types";
import WeatherData from "../../WeatherData";

export default abstract class StationPublisher {
  private subscribers: StationSubscriber[];

  constructor() {
    this.subscribers = [];
  }

  subscribe(subscriber: StationSubscriber): void {
    this.subscribers.push(subscriber);
  }

  unsubscribe(subscriber: StationSubscriber): void {
    this.subscribers = [...this.subscribers].filter(
      (currentSubscriber) => currentSubscriber !== subscriber
    );
  }

  protected notifySubscribers(weatherData: WeatherData): void {
    this.subscribers.forEach((subscriber) => subscriber.update(weatherData));
  }
}
