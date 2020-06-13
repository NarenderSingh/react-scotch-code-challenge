import React, { useState } from "react";


const Two = () => {
  const[activeUser, setActiveUser] = useState('Chris');

  const changeUser = () => {
    setActiveUser('Bolingo!');
  }

  const content = (
    <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 2</h2>
        <p>Active User is: {activeUser}</p>
        <button onClick={changeUser}>Change Me!</button>
      </div>
  )

  return content;
}

export default Two;
