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
    element.scrollLeft -= screenWidth - 64 - 64 + 32;
  };

  const sliderRight = (element) => {
    console.log("right");
    element.scrollLeft += screenWidth - 64 - 64 + 32;
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
        className="text-white flex overflow-x-auto w-full px-6 md:px-16 py-0 md:py-4 scrollbar-none scroll-smooth"
        ref={elementRef}
      >
        {movieList.map((movie) => (
          <img
            src={IMAGE_BASE_URL + movie.backdrop_path}
            key={movie.id}
            className="min-w-full h md:h-[310px] object-cover mr-8 rounded-md hover:border-[4px] border-gray-400 transition-all duration-100 ease-in"
          />
        ))}
      </div>
    </>
  );
};

export default Slider;
