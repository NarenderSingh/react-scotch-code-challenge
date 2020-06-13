import React, { useState } from "react";

const Three = () => {
  const initialState = {
    year: 1995,
    type: "Mercedes",
    used: true
  }

  const [car, setCar] = useState(initialState)

  const swapCar = () => {
    setCar({
      year: 2018,
      type: "BMW",
      used: false
    })
  }

  const content = (
    <div style={{ marginBottom: "50px" }}>
        <h2>Challenge 3</h2>
        <h3>Car Spec is:</h3>
        <ul>
          <li>{car.type}</li>
          <li>{car.year}</li>
          <li>{car.used ? "Used Car" : "Brand New!"}</li>
        </ul>
        <button onClick={swapCar}>Swap Car!</button>
      </div>
  )

  return content;
}

export default Three;
