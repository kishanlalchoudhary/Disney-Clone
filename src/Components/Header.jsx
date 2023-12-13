import { HiPlayCircle, HiStar, HiTv } from "react-icons/hi2";
import { HiHome, HiPlus, HiSearch, HiDotsVertical } from "react-icons/hi";
import HeaderItem from "./HeaderItem";
import logo from "../assets/Images/logo.png";
import profile from "../assets/Images/profile.png";
import { useState } from "react";

const Header = () => {
  const [navToggle, setNavToggle] = useState(false);

  const menu = [
    {
      name: "HOME",
      icon: HiHome,
    },
    {
      name: "SEARCH",
      icon: HiSearch,
    },
    {
      name: "WATCH LIST",
      icon: HiPlus,
    },
    {
      name: "ORIGINALS",
      icon: HiStar,
    },
    {
      name: "MOVIES",
      icon: HiPlayCircle,
    },
    {
      name: "SERIES",
      icon: HiTv,
    },
  ];

  return (
    <div className="flex items-center justify-between p-5 mx-auto gap-8">
      <div className="flex items-center gap-8">
        <img
          loading="lazy"
          src={logo}
          className="w-[80px] md:w-[100px] object-cover"
        />
        <div className="hidden md:flex items-center gap-8">
          {menu.map((item) => (
            <HeaderItem Name={item.name} Icon={item.icon} key={item.name} />
          ))}
        </div>
        <div className="flex items-center gap-4 md:gap-8 md:hidden">
          {menu.map(
            (item, index) =>
              index < 3 && (
                <HeaderItem Name={""} Icon={item.icon} key={item.name} />
              )
          )}
          <div
            className="md:hidden relative"
            onClick={() => setNavToggle(!navToggle)}
          >
            <HeaderItem Name="" Icon={HiDotsVertical} />
            {navToggle && (
              <div className="absolute mt-3 right-0 sm:right-auto bg-[#121212] border-[1px] border-gray-700 flex flex-col px-5 py-4 gap-3 rounded-[5px]">
                {menu.map(
                  (item, index) =>
                    index > 2 && (
                      <HeaderItem
                        Name={item.name}
                        Icon={item.icon}
                        key={item.name}
                      />
                    )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      <img
        loading="lazy"
        src={profile}
        className="w-[40px] rounded-full object-cover"
      />
    </div>
  );
};

export default Header;
