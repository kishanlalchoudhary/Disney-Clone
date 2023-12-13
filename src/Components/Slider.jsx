import { useEffect, useRef, useState } from "react";
import Axios from "../api/axios";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState(["kishanlal"]);
  const elementRef = useRef();

  const getMovieList = async () => {
    const response = await Axios.get("trending/movie/day");
    const result = response.data.results;
    setMovieList(result);
  };

  useEffect(() => {
    getMovieList();
  }, []);

  const sliderLeft = (element) => {
    console.log("left");
    element.scrollLeft -= screenWidth - 64 - 64 + 16;
  };

  const sliderRight = (element) => {
    console.log("right");
    element.scrollLeft += screenWidth - 64 - 64 + 16;
  };

  return (
    <>
      <div className="hidden md:block">
        <HiChevronLeft
          className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer left-0"
          onClick={() => sliderLeft(elementRef.current)}
        />
        <HiChevronRight
          className="text-white text-[30px] absolute mx-8 mt-[150px] cursor-pointer right-0"
          onClick={() => sliderRight(elementRef.current)}
        />
      </div>
      <div
        className="text-white flex overflow-x-auto w-full px-5 md:px-16 py-2 md:py-4 scrollbar-none scroll-smooth gap-5 md:gap-8"
        ref={elementRef}
      >
        {movieList.map((movie) => (
          <img
            loading="lazy"
            key={movie.id}
            src={IMAGE_BASE_URL + movie.backdrop_path}
            className="w-11/12 md:min-w-full h md:h-[310px] object-cover object-top rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in shadow-md shadow-black"
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
