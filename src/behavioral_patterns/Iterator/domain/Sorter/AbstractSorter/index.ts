export default abstract class AbstractSorter<T> {
  constructor() {}
  abstract sort(collection: Array<T>): Array<T>;
}
