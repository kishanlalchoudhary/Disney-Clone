import { useEffect, useRef, useState } from "react";
import Axios from "../api/axios";
import PropTypes from "prop-types";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original/";
const screenWidth = window.innerWidth;

const HorizontalMovieList = (props) => {
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
          className="text-white text-[30px] absolute mx-8 mt-[85px] cursor-pointer left-0 z-10"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="text-white text-[30px] absolute mx-8 mt-[85px] cursor-pointer right-0 z-10"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="flex overflow-x-auto scrollbar-none scroll-smooth gap-4 md:gap-8 pb-2 pt-5 md:py-5 px-5 md:px-16"
        ref={elementRef}
      >
        {movielist.map((movie) => (
          <div key={movie.id} className="group">
            <div className="min-w-[165px] md:min-w-[300px] min-h-[92.813px] md:min-h-[168.750px] shadow-md shadow-black">
              <img
                loading="lazy"
                src={IMAGE_BASE_URL + movie.backdrop_path}
                className="rounded-lg hover:border-[3px] border-gray-400 group-hover:scale-110 transition-all duration-150 ease-in cursor-pointer "
              />
            </div>
            <h2 className="text-white pt-4 text-md group-hover:scale-110 transition-all duration-150 ease-in cursor-pointer">
              {movie.original_title}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};

HorizontalMovieList.propTypes = {
  id: PropTypes.number.isRequired,
};

export default HorizontalMovieList;
