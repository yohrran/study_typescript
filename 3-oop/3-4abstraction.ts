{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeeCup;
  }
  //private을 사용하면 외부에서 볼 수 없다
  //public은 안붙여도 암묵적으로 붙어있다.
  class CoffeeMachine implements CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;
    private coffeeBeans: number = 0;

    private constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans: number): CoffeeMachine {
      return new CoffeeMachine(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    private grindBeans(shots: number) {
      console.log("grinding beans for" + shots);
      if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
        throw new Error("Not enough coffee beans!!");
      }
      this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
    }

    private preheat() {
      console.log("heating up....");
    }

    private extract(shots: number): CoffeeCup {
      console.log(`Pulling Coffee....${shots}`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }
    makeCoffee(shots: number): CoffeeCup {
      this.grindBeans(shots);
      this.preheat();
      return this.extract(shots);
      // if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
      //   throw new Error("Not enough coffee beans!!");
      // }
      // this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
      // return {
      //   shots: shots,
      //   hasMilk: false,
      // };
    }
  }

  const make = CoffeeMachine.makeMachine(32);
  console.log(make);
  make.fillCoffeeBeans(20);
  console.log(make.makeCoffee(2));
}
