import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./request";
import "./App.css";
import Nav from "./Nav";

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
        fontStyle: "oblique",
        backgroundImage: `url('${base_url}${movies?.backdrop_path}')`,
        maxWidth: "100%",
        marginTop: "-18px",
      }}
    >
      <Nav />
      <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-left bg-transparent  ">
        <div className="col-md-5  banner-content">
          <h1 className="display-4 font-weight-normal text-white ">
            {movies?.title || movies?.name || movies?.original_name}
          </h1>

          <button className="btn btn-outline-secondary text-white">Play</button>
          <button className="btn btn-outline-secondary text-white mx-2">
            My List
          </button>

          <p className="lead font-weight-normal text-white py-3">
            {movies?.overview}
          </p>
        </div>
      </div>
      <div className="fade_button" />
    </header>
  );
}

export default Banner;
