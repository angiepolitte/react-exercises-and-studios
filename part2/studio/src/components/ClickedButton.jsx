import "./styling.css";

function ClickedButton() {
  function handleClick() {
    alert("Pin removed from board"); 
  }
  return (
    <button id="clickedButton" onClick={handleClick}>
      {" "}
      Saved
    </button>
  );
}

export default ClickedButton;
