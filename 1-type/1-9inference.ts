{
  /**
   * Type inference
   * 타입이 알아서 지정되는 경우가 있지만 그렇게 되면 프로젝트가 커지면
   * 혼돈에 빠질 수 있기 때문에 타입을 정확하게 명시하는게 좋다.
   */
  //Typescript 변수에 문자열로 할당하면 해당 변수는 해당 할당된 타입으로 지정된다.
  let text = "hello";
  text = "123";

  //타입을 지정해주지 않으면 any로 되기 때문에 인자는 정확하게 할당하는게 좋다.
  function print(message) {
    console.log(message);
  }

  function add(x: number, y: number): number {
    return x + y;
  }

  const result = add(1, 2);
}
