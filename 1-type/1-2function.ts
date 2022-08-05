{
  //JS
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  //TS
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  //JS
  function jsFetchNum() {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //TS
  function fetchNum(): Promise<number> {
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //JS => TS
  //Optional parameter
  function printName(firstName: string, lastName?: string): string {
    return firstName + lastName;
  }

  const myName = printName("shin", "yohan");
  console.log(myName);
  //쟁해진 타입 및 매개변수를 주지 않으면 에러가 발생한다. 하지만 optional parameter은 전달해도 되고 안해도 된다.
  printName("shin");

  //Default parameter
  function printMessage(message: string = "Type") {
    console.log(message);
  }

  printMessage();

  // Rest parameter
  function addNumber(...parameter: number[]): number {
    return parameter.reduce((a, b) => a + b);
  }
  console.log(addNumber(1, 2, 3, 10));
}
