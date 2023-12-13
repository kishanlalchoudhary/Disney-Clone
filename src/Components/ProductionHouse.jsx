import disney from "../assets/Images/disney.png";
import marvel from "../assets/Images/marvel.png";
import nationalG from "../assets/Images/nationalG.png";
import pixar from "../assets/Images/pixar.png";
import starwar from "../assets/Images/starwar.png";

import disneyV from "../assets/Videos/disney.mp4";
import marvelV from "../assets/Videos/marvel.mp4";
import pixarV from "../assets/Videos/pixar.mp4";
import nationalGV from "../assets/Videos/national-geographic.mp4";
import starwarV from "../assets/Videos/star-wars.mp4";

const ProductionHouse = () => {
  const productionHouseList = [
    {
      id: 1,
      image: disney,
      video: disneyV,
    },
    {
      id: 2,
      image: pixar,
      video: pixarV,
    },
    {
      id: 3,
      image: marvel,
      video: marvelV,
    },
    {
      id: 4,
      image: starwar,
      video: starwarV,
    },
    {
      id: 5,
      image: nationalG,
      video: nationalGV,
    },
  ];
  return (
    <>
      <div className="flex gap-2 md:gap-7 pt-10 md:pt-6 pb-5 px-5 md:px-16">
        {productionHouseList.map((item) => (
          <div
            key={item.id}
            className="border-[2px] border-gray-600 rounded-md md:rounded-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer shadow-xl shadow-black bg-#131520 group relative"
          >
            <video
              src={item.video}
              autoPlay
              loop
              playsInline
              muted
              className="absolute top-0 rounded-md md:rounded-lg -z-10 opacity-0 group-hover:opacity-75"
            />
            <img
              loading="lazy"
              src={item.image}
              className="w-full relative z-10"
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductionHouse;
