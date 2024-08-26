import data from "../data.json";
import { useState } from "react";
import "./styling.module.css";

export default function MyFood() {
  const [index, setIndex] = useState(0);

  function handleClick() {
    if (index < data.sandwiches.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  let sandwiches = data.sandwiches;
  let sandwich = sandwiches[index];
  return (
    <div>
      <button onClick={handleClick}>Next</button>
      <h2>
        {sandwich.food} by {sandwich.artist}
      </h2>
      <img className="img" src={sandwich.photoUrl} alt={sandwich.alt} />
    </div>
  );
}
