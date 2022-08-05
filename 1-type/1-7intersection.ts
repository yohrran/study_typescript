{
  /**
   * Intersection Types: &
   */
  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    employeeId: number;
    work: () => void;
  };

  function internWork(person: Student & Worker) {
    console.log(person.name, person.score, person.employeeId);
  }

  internWork({
    name: "yohan",
    score: 10,
    employeeId: 13,
    work: () => {},
  });
}
