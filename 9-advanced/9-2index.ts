{
  const obj = {
    name: "yohan",
  };

  console.log(obj.name);
  console.log(obj["name"]);

  type Animal = {
    name: string;
    age: number;
    gender: "male" | "female";
  };

  type Name = Animal["name"]; //string
  const text: Name = "string";

  type Gender = Animal["gender"]; //'male' | 'female'

  type Keys = keyof Animal; // name, age, gender

  const key: Keys = "name";

  type Person = {
    name: string;
    gender: Animal["gender"];
  };

  const person: Person = {
    name: "hello",
    gender: "female",
  };
}
