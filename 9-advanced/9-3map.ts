{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOPtional: VideoOptional = {
    title: "hi",
  };

  type Animal = {
    name: string;
    age: number;
  };
  type AnimalOptional = Optional<Animal>;

  const animalOptional: AnimalOptional = {
    age: 3,
  };
  animalOptional.age = 5;

  const video: ReadOnly<Video> = {
    title: "1",
  };

  type Nullable<T> = { [P in keyof T]?: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
