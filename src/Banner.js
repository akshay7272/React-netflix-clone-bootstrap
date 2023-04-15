import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./App.css";

function Banner() {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);

      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);
  //   console.table(movies);

  return (
    <header
      style={{
        backgroundSize: "cover",
        objectFit: "contain",
        fontStyle: "oblique",
        backgroundImage: `url('${base_url}${movies?.backdrop_path}')`,
        height: "600px",
      }}
    >
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-left bg-transparent  ">
        <div className="col-md-5  banner-content">
          <h1 className="display-4 font-weight-normal text-white my-5">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>

          <a className="btn btn-outline-secondary text-white" href="#">
            Play
          </a>
          <a className="btn btn-outline-secondary text-white mx-2" href="#">
            My List
          </a>

          <p className="lead font-weight-normal text-white py-3">
            {movies?.overview}
          </p>
        </div>
        <div className="fade_button" />
      </div>
    </header>
  );
}

export default Banner;
