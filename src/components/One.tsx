import React, {useState} from "react";

const One = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1)
  }

  const content = (
    <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 1</h2>
        <p>Count is: {count}</p>
        <button onClick={increase}>Increase Count!</button>
      </div>
  )

  return content;
}

export default One;
