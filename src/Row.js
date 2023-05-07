import React, { useEffect, useState, useRef } from "react";
import axios from "./axios";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const slideLeft = (e) => {
    // const slider = e.target.nextElementSibling.querySelector(".scroll");
    // slider.scrollLeft -= 700;
    e.target.nextElementSibling.scrollLeft -= 700;
  };

  const slideRight = (e) => {
    // const slider = e.target.previousElementSibling.querySelector(".scroll");
    // slider.scrollLeft += 700;
    e.target.previousElementSibling.scrollLeft += 700;
  };

  return (
    <div className="row mx-2">
      <h2 className="head-color mx-3">{title}</h2>

      <div className="d-flex p-2 w-full h-full  whitespace-nowrap">
        <VscArrowLeft
          className="arrow-buttons"
          onClick={(e) => slideLeft(e)}
          size={90}
          style={{ color: "white", marginTop: "170px" }}
        />

        <div
          className="d-flex p-2 bd-highlight row-trend scroll"
          id={`slider-${title}`}
        >
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

        <VscArrowRight
          className="arrow-buttons"
          size={90}
          style={{ color: "white", marginTop: "170px" }}
          onClick={(e) => slideRight(e)}
        />
      </div>
    </div>
  );
}

export default Row;
