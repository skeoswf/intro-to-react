import React, { useState } from 'react';

export default function Home() {
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue((prevState) => prevState + 1);
  };

  return (
    <>
      <h1>counter app</h1>
      <h2>value: {value}</h2>
      <button type="button" onClick={handleClick}>increment</button>
      <button type="button" onClick={() => setValue((prevState) => (prevState - 1))}>decrement</button>
      <button type="button" onClick={() => setValue(0)}>reset</button>
    </>
  );
}
