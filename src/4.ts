class Key {
  private signature: number = Math.random();

  getSignature(): number {
    return this.signature;
  }
}

abstract class House {
  protected door: boolean = false;
  protected key: Key;
  protected tenants: Person[] = [];
  constructor(key: Key) {
    this.key = key;
  }
  comeIn(person: Person): void {
    if (this.door) {
      this.tenants.push(person);
      console.log(`Person in house, the door is open!`);
    } else {
      console.log(`The door is locked !`);
    }
  }
  openDoor(key: Key): void {}
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (this.key.getSignature() === key.getSignature()) {
      this.door = true;
    }
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
