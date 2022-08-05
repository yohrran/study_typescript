{
  //Array 배열로 2가지 방식으로 만들 수 있다.
  const fruit: string[] = ["사과", "바나나"];
  const fruit2: Array<string> = ["사과", "바나나"];

  //readonly는 절대 변경할 수 없다.
  //readonly에서는 Array<string>으로 할 수 없다.
  function printArray(fruits: readonly string[]) {}

  // Tuple 서로 다른 타입을 담을 수 있다 -> interface, type alias, class
  // 하지만 권장하진 않는다. index로 접근하게 되면 가독성이 떨어진다.
  let student: [string, number];
  student = ["name", 14];

  const [name, age] = student;
}
