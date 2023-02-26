import React, { useState } from "react";
import Film from "./Film";

function KarakterInfo({
  mass,
  height,
  hair_color,
  eye_color,
  skin_color,
  gender,
  films,
  birth_year,
}) {
  return (
    <div>
      <p>Gender: {gender}</p>
      <p>Height: {height}</p>
      <p>Mass: {mass}</p>
      <p>Eye Color:{eye_color}</p>
      <p>Hair Color:{hair_color}</p>
      <p>Skin Color:{skin_color}</p>
      <p>Birth Year:{birth_year}</p>
      <p style={{ fontWeight: "bold" }}>Appears in {films.length} films</p>
      <div>
        {films.map((film) => (
          <Film film={film} />
        ))}
      </div>
    </div>
  );
}
export default KarakterInfo;
