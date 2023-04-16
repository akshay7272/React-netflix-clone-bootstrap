import React, { useEffect, useState } from "react";
import axios from "./axios";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row mx-2">
      <h2 className="head-color mx-3">{title}</h2>

      <div className="d-flex p-2 bd-highlight row-trend">
        {movies.map((data) => (
          <img
            key={data.id}
            src={`${base_url}${data.poster_path}`}
            alt={data.name}
            className="img-thumbnail posters"
            height="50px"
            width="300px"
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
