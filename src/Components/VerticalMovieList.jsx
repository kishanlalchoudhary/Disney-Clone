import { useEffect, useRef, useState } from "react";
import Axios from "../api/axios";
import PropTypes from "prop-types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const MovieList = (props) => {
  const [movielist, setMovieList] = useState([]);
  const elementRef = useRef();

  const getMovieByGenreId = async (id) => {
    const response = await Axios.get("discover/movie?with_genres=" + id);
    setMovieList(response.data.results);
  };

  useEffect(() => {
    getMovieByGenreId(props.id);
  }, []);

  const sliderLeft = (element) => {
    console.log("left");
    element.scrollLeft -= screenWidth - 64 - 64 - 12;
  };

  const sliderRight = (element) => {
    console.log("right");
    element.scrollLeft += screenWidth - 64 - 64 - 12;
  };

  return (
    <>
      <div className="hidden md:block">
        <HiChevronLeft
          className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0 z-10"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0 z-10"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto scrollbar-none scroll-smooth gap-4 md:gap-8 pb-2 pt-5 md:py-5 px-5 md:px-16"
        ref={elementRef}
      >
        {movielist.map((movie) => (
          <img
            key={movie.id}
            src={IMAGE_BASE_URL + movie.poster_path}
            className="w-[110px] md:w-[200px] rounded-lg hover:border-[3px] border-gray-400 hover:scale-110 transition-all duration-150 ease-in cursor-pointer shadow-md shadow-black"
          />
        ))}
      </div>
    </>
  );
};

MovieList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default MovieList;