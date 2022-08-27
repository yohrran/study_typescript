# TypeScript study

# OOP = 객체지향프로그래밍

- 객체들을 프로그래밍하는 방식. object란 관련된 data와 code를 묶는 것을 뜻한다.
- 전반적인 사용방식과 코딩하는 방식은 다른 언어에서도 비슷하다.

## 명령절차적프로그래밍(Imperative and Procedural Programming)

- 정의된 순서대로 함수를 하나씩 호출하는 것.

#### 단점

- 하나를 수정하려면 전체적인 어플리케이션을 파악해야하고, side Effect를 고려해야한다.
- 유지보수 및 확장성이 떨어진다.

## Object Oriented Programming

- 객체로 정의해 객체로 묶어놓고 코딩하는 것.
- object 단위로 만들어가기 때문에 해당 object에서 수정하면 된다.
- 재활용 및 확장성이 높고, 높은 수준이 필요하다.
- 이 외에 error, exception을 만들 수 있다.
- class를 이용해서 object instance를 만들 수 있다.
- class는 틀. 그 틀을 이용해 instance를 만들어 낸다.

## 객체지향 원칙 4가지

캡슐화, 추상화, 상속화, 다향성

1. 캡슐화(Encapsulation)

- 서로 관련 있는 것을 묶어 놓는 것.
- 예를 들어 동물의 감정상태는 동물 내부 안에 있고, 음식 및 노는 것으로 외부에서 상태를 바꿀 수 있다.

2. 추상화(Abstraction)

- 내부에 복잡한 부분을 이해하지 않고, 간단하게 사용하는 것.
- 예를 들어 리모콘이 안에서 어떻게 동작하고 어떻게 작동하는지를 파악하는게 아닌 버튼을 누름으로써 간단히 동작시키는 것.

3. 상속화(Inheritance)

- 잘 만들어진 리모콘 함수를 좀 더 기능을 추가해서 다른 리모콘을 만들 수 있다.
- 재사용성을 높일 수 있다.

4. 다향성(Polymorphism)

- 공통된 함수를 이용해 접근이 가능하다.