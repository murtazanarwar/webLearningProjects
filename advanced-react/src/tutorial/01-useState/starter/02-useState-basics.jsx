import { useState } from "react";

const UseStateBasics = () => {
  const [count, setCount] = useState(0);
  // const [array, setArray] = useState([1]);
  const handleClick = () => {
    setCount(count + 1);
    // setArray([...array, count]);
  };
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
};

export default UseStateBasics;
