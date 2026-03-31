import { useState } from "react";

export const Clicked = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>Clikced</h1>
      <button onClick={() => setCounter(counter + 1)}>
        clicked click {counter}
      </button>
    </div>
  );
};
