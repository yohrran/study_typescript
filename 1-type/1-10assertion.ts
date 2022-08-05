{
  /**
   * Type Assertions = 좋지 않다
   * 100%정확할 때만 캐스팅해서 사용하는게 좋다.
   */

  function jsStrFunc(): any {
    return 10;
  }

  const result = jsStrFunc();
  console.log((<string>result).length);

  const wrong: any = 5;
  //잘못 사용하면 꺼진다.....
  console.log((wrong as Array<number>).push(1));

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  //! = 절대적으로 값이 있다고 확실할 때 사용한다.
  //? = numbers가 number타입이 맞다면 push한다.
  numbers!.push(2);

  const button = document.querySelector("class");
  button?.nodeValue;
}
