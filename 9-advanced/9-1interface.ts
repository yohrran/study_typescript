type PositionType = {
  x: number;
  y: number;
};

interface PositionInterface {
  x: number;
  y: number;
}

//type, interface 둘 다 동일하게 동작한다.
const obj1: PositionType = {
  x: 1,
  y: 1,
};

const obj2: PositionInterface = {
  x: 1,
  y: 1,
  z: 3,
};

//class도 마찬가지로 구현할 수 있다.
class Pos1 implements PositionType {
  x: number;
  y: number;
}

class Pos2 implements PositionInterface {
  x: number;
  y: number;
  z: number;
}

//Extends 또한 가능하다
interface ZPositionInterface extends PositionInterface {
  z: number;
}

const obj3: ZPositionInterface = {
  x: 1,
  y: 2,
  z: 3,
};

type ZPositionType = PositionType & { z: number };

//only interfaces can be merged.

interface PositionInterface {
  z: number;
}

//only types can be merged.
type Person = {
  name: string;
  age: number;
};

type Name = Person["name"];

type NumberType = number;
type UnionType = "left" | "right";
