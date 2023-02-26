import React, { useState } from "react";
import KarakterInfo from "./KarakterInfo";

function Karakter({ a }) {
  const [info, setİnfo] = useState(false);

  const {
    mass,
    height,
    hair_color,
    eye_color,
    skin_color,
    gender,
    birth_year,
    films,
  } = a;
  const handleClick = () => {
    setİnfo(!info);
  };

  return (
    <div>
      <h1 onClick={handleClick}>{a.name}</h1>
      {info ? (
        <KarakterInfo
          mass={mass}
          height={height}
          hair_color={hair_color}
          eye_color={eye_color}
          skin_color={skin_color}
          gender={gender}
          birth_year={birth_year}
          films={films}
        />
      ) : (
        <></>
      )}
    </div>
  );
}

export default Karakter;
