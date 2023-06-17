import genres from "../constant/GenresList";
import HorizontalMovieList from "./HorizontalMovieList";
import VerticalMovieList from "./VerticalMovieList";

const GenreMovieList = () => {
  return (
    <div>
      {genres.map((item, index) => (
        <div key={item.id} className="py-4">
          <h2 className="text-white text-[20px] font-semibold px-5 md:px-16">
            {item.name}
          </h2>
          {index % 3 != 0 ? (
            <VerticalMovieList id={item.id} />
          ) : (
            <HorizontalMovieList id={item.id} />
          )}
        </div>
      ))}
    </div>
  );
};

export default GenreMovieList;
