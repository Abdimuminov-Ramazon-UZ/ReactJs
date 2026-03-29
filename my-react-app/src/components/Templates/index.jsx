import { useNavigate } from "react-router-dom";

export let Template = () => {
  let Navigate = useNavigate();
  const onClear = () => {
    localStorage.clear();

    return Navigate("/home");
  };
  return (
    <div>
      <h1>homeTemplate</h1>
      <p id="data">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse iusto
        quaerat ab, quod cupiditate, dolore iure similique laboriosam temporibus
        nisi modi totam expedita vel laudantium quasi, voluptatem fugit
        explicabo aliquid. Quod possimus, assumenda expedita tempore esse
        dolorem libero necessitatibus laborum rerum, odio non, similique
        quibusdam! Molestiae alias, recusandae voluptates eos consequatur,
        eveniet ex porro magnam blanditiis minus delectus nulla?
      </p>
      <button onClick={onClear}>Clear All data</button>
    </div>
  );
};
