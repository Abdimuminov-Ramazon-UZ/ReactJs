import { useState } from "react";

export const UpdateCounter = (Element) => {
  const WrappedComponent = (props) => {
    const [count, setCount] = useState(0);
    const increment = () => {
      return setCount(count + 1);
    };
    return (
      <Element
        setCount={setCount}
        onCount={increment}
        item={count}
        {...props}
        test="why error"
      />
    );
  };

  //fix component name
  WrappedComponent.displayName = `UpdateCounter(${Element.displayName || Element.name || "Component"})`;

  return WrappedComponent;
};
//HOC s are changed React 19 version so we add some error boundreies with display name
//we create more complex functions and actions
