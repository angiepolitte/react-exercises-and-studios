import React from "react";
import classes from "./ChoresList.module.css";

export default function ChoresList() {
  const chores = ["Laundry", "Dishes", "Vacuum"];
  return (
    <div>
      <h1 className={classes.choresHeading}>Chores to complete</h1>
      <ul>
        <li className={classes.choresText}>{chores[0]}</li>
        <li className={classes.choresText}>{chores[1]}</li>
        <li className={classes.choresText}>{chores[2]}</li>
      </ul>
    </div>
  );
}
