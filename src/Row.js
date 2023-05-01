import React, { useEffect, useState, useRef } from "react";
import axios from "./axios";
import { VscArrowLeft, VscArrowRight } from "react-icons/vsc";
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original";
  const sliderRef = useRef(null);
  const handleScrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 500;
    }
    console.log(sliderRef.current.scrollLeft, "slider");
  };
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      // console.log(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const slideLeft = () => {
    var slider = document.getElementById("sliders");
    slider.scroll = 0;
    slider.scrollLeft -= 700;
  };
  const slideRight = () => {
    var slider = document.getElementById("sliders");
    slider.scrollLeft += 700;
  };
  return (
    <div className="row mx-2">
      <h2 className="head-color mx-3">{title}</h2>

      <div
        className=" d-flex p-2 w-full h-full  scroll whitespace-nowrap"
        ref={sliderRef}
      >
        <VscArrowLeft
          onClick={() => slideLeft()}
          size={90}
          style={{ color: "white", marginTop: "170px" }}
        />
        <div className="d-flex p-2 bd-highlight row-trend scroll" id="sliders">
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
          size={90}
          style={{ color: "white", marginTop: "170px" }}
          onClick={slideRight}
        />
      </div>
    </div>
  );
}

export default Row;
