import React from "react";
function NavBar({ setPage }) {
  function handleClick(event) {
    setPage(event.target.innerText);
    console.log(event.target.innerText);
  }
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", color: "blue" }}
    >
      <p onClick={handleClick}>1</p>
      <p onClick={handleClick}>2</p>
    </div>
  );
}
export default NavBar;
