import Person from "./domain/Person";
import PersonCollection from "./domain/PersonCollection";

const main = function () {
  const person1 = new Person("Runtime", "Terror", 28, 2);
  const person2 = new Person("Crash", "Mode", 15, 1);
  const person3 = new Person("Life", "Cycle", 25, 0);
  const person4 = new Person("App", "Monsters", 34, 4);
  const person5 = new Person("Explode", "Legacy", 48, 3);

  const items = [];
  items.push(person1, person2, person3, person4, person5);

  const listPerson = new PersonCollection(items);

  const iteratorName = listPerson.createSortByNameIterator("ASC");
  // const iteratorAge = listPerson.createSortByAgeIterator(0);
  // const iteratorChildren = listPerson.createSortByChildrenIterator(0);

  while (iteratorName.hasNext()) {
    const person = iteratorName.next()?.getFullName();
    console.log({ person });
  }
};

export default main;
