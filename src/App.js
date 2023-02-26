import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter.js";
import NavBar from "./components/Navbar";
import SearchBar from "./components/SearchBar";

const App = () => {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/films/")
      .then((response) => {
        //setFilmİnfo(response.data[0].results);
        console.log("Bu films", response.data[0].results);
      })
      .catch((error) => console.error());
  }, []);

  useEffect(() => {
    axios
      .get("https://swapi.dev/api/people/?page=" + page)
      .then((response) => {
        setData(response.data);
        console.log(response.data);
      })
      .catch((error) => console.error());
  }, [page]);

  return (
    <div className="App">
      <SearchBar
        search={search}
        setSearch={setSearch}
        data={data}
        setData={setData}
      />
      {data ? data.map((a) => <Karakter a={a} />) : <p>Yükleniyor...</p>}
      <NavBar setPage={setPage} />
    </div>
  );
};

export default App;
