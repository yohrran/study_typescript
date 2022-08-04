{
  /**  JAvaScript 타입 종류
   * Primitive : number, string, boolean, bigint, symbol, null, undefined;
   * Object: function, array.....
   *
   */

  // number
  const num: number = 5;

  //string
  const str: string = "Hello Typescript";

  //boolean
  const bool: boolean = true;

  //undefined
  //가장 큰 차이, undefined는 값이 정해지지 않은 상태, null은 사용자가 직접 결정시키는 부분이다.
  //null
  let age: number | undefined = undefined;
  age = 5;

  let person: string | null = null;
  person = "Tom";

  //unknown - 알 수 없는 타입 상태. 그래서 어떤 타입이든 들어올 수 있다. 자바스크립트 라이브러리에서 리턴값을 모를 때, 쓸 수 있다.
  //하지만 왠만하면 쓰지 않는게 좋다.
  let notSure: unknown = 0;
  notSure = "123";

  //any - any도 마찬가지로 어떤 타입이든 할당할 수 있다.
  let anything: any = 0;
  anything = 5;

  //void - 리턴값이 없을 때 사용한다. void는 생략이 가능하지만 컨벤션에 맞춰가자
  function print(): void {
    console.log("hello");
  }

  //never - 리턴없이 에러를 던지거나, 리턴값이 없을 때 사용한다.
  function throwError(message: string): never {
    throw new Error(message);
  }

  //Object
  function acceptSomeObject(obj: object) {
    console.log(obj);
  }
  acceptSomeObject({ name: "yohan" });
}
