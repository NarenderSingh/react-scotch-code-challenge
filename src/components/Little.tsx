import React, { useEffect } from "react";

const Little = () => {
  useEffect(() => {
    return () => {
      alert("Goodbye!!");
    };
  })

  const content = (
    <div style={{ marginBottom: "50px", border: "1px solid black" }}>
      <h5> Hi I'm Little and its nice to meet you!!!</h5>
    </div>
  )

  return content;
}

export default Little;
