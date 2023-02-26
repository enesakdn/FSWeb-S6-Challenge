/*import React, { useEffect, useState } from "react";

import films from "../mocks/handlers.js";

function Filmİnfo({ film }) {
  const [filmİnfo, setFilmİnfo] = useState(null);



  if (filmİnfo === null) {
    return <p>Loading...</p>;
  }
  const a = filmİnfo[0].results;
  const movies = a.filter((object) => {
    return object.title === film;
  });

  return (
    <div>
      {movies.length > 0 ? (
        <p>{movies[0].opening_crawl}</p>
      ) : (
        <p>No film found.</p>
      )}
    </div>
  );
}

export default Filmİnfo; bu kodu yazdığımda filmİnfo boş array dönüyor. */

import React from "react";
import films from "../mocks/handlers.js";

function Filmİnfo({ film }) {
  const filmler = films[0].results;
  const filteredFilm = filmler.filter((object) => {
    return object.title === film;
  });
  return (
    <>
      <p>{filteredFilm[0]["opening_crawl"]}</p>
      <p>Directed by: {filteredFilm[0].director}</p>
      <p>Produced by: {filteredFilm[0].producer}</p>
      <p>Release Date: {filteredFilm[0]["release_date"]}</p>
    </>
  );
}

export default Filmİnfo;
