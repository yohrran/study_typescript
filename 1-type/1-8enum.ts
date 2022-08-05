{
  /**
   * Enum
   */
  //Javascript에는 존재하지 않는 타입이다.
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const datOfTody = DAYS_ENUM.MONDAY;

  //TypeScript
  //enum은 0부터 시작 한다. 숫자는 자동할당, 문자열은 수동적으로 하나씩 할당해야한다.
  //하지만 가능한 쓰지 않는게 좋다.
  //union으로 할당이 가능하기 때문에 굳이 enum을 사용하지 않아도 된다.
  type DaysOfWeek = "Monday" | "Tuesday";

  enum Days {
    Monday,
    Tuesday,
  }

  console.log(Days);
  console.log(Days.Monday);

  let day: Days = Days.Monday;
  day = Days.Tuesday;
  //숫자로 할당이 가능하다.
  day = 10;
}
