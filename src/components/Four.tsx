import React, { useState, Component, useEffect } from "react";


const Four = () => {
  const [message, setMessage] = useState("What's happening this week?")

  useEffect(() => {
     setTimeout(() => {
      setMessage("I only know it's gon be lit!!");
    }, 5000);
  },[])

  const content = (
    <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 4</h2>
        <p>Status: {message}</p> 
      </div>
  )

  return content;
}

export default Four;
