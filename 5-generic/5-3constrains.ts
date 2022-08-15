{
  interface Employee {
    pay(): void;
  }

  class FullTimeEmployee implements Employee {
    pay() {
      console.log("Full time!!");
    }
    workFullTime() {}
  }

  class partTimeEmployee implements Employee {
    pay() {
      console.log("part Time");
    }
    workPartTime() {}
  }

  //세부적인 타입을 인로 받아서 추상적인 타입으로 리턴한수는 별로 좋지않다.
  function pay<T extends Employee>(employee: T): T {
    employee.pay();
    return employee;
  }

  const ellie = new FullTimeEmployee();
  const bob = new partTimeEmployee();
  ellie.workFullTime();
  bob.workPartTime();
  const ellieAfterPay = pay(ellie);
  const bobAfterPay = pay(bob);
  console.log(ellieAfterPay);
  console.log(bobAfterPay);

  const obj = {
    name: "yohan",
    age: 30,
  };

  // K extends keyof T T의 키 중 하나인 K
  // T[K] === obj [key]
  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }
  console.log(getValue(obj, "name")); //yohan
  console.log(getValue(obj, "age")); //30
}
