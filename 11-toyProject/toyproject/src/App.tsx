import React, { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";

export interface IDateProps {
  text: string;
  title: string;
  body: string;
}

function App() {
  const [date, setDate] = useState<IDateProps[]>([]);
  return (
    <>
      <Header date={date} setDate={setDate} />
      <Section date={date} setDate={setDate} />
    </>
  );
}

export default App;
