import React, { useState } from "react";
import Filmİnfo from "./Filmİnfo";

function Film({ film }) {
  const [showInfo, setShowInfo] = useState(false);

  const handlemovieClick = () => {
    setShowInfo(!showInfo);
  };

  return (
    <>
      <p onClick={handlemovieClick}>{film}</p>
      {showInfo ? <Filmİnfo film={film} /> : <></>}
    </>
  );
}
export default Film;
