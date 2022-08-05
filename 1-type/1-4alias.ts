{
  //type Alias
  /**
   * type을 정할 수 있다.
   */

  type Text = string;
  const name: Text = "TypeScript";
  type Num = number;
  type Student = {
    name: string;
    age: Num;
  };

  const student: Student = {
    name: "yohan",
    age: 29,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let yohan: Name;
  yohan = "name";
  console.log(yohan);
}
