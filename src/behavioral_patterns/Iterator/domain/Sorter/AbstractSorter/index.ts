export default abstract class AbstractSorter<T> {
  abstract sort(collection: Array<T>): Array<T>;
}
