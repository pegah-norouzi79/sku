import React, { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { BiCategory } from "react-icons/bi";
import { useNavigate, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { toggleShowSearch } from "../features/searchSlice";

const Navigation = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const Menus = [
    {
      name: "خانه",
      icon: <IoMdHome size={27} />,
      dis: "translate-x-0",
      url: "/",
    },
    {
      name: "دسته بندی",
      icon: <BiCategory size={27} />,
      dis: "-translate-x-[26.5%]",
      url: "category",
    },
    {
      name: "جستجو",
      icon: <BsSearch size={27} />,
      dis: "-translate-x-[54%]",
    },
    {
      name: "پروفایل",
      icon: <FaUser size={27} />,
      dis: "-translate-x-[81%]",
      url: "profile",
    },
  ];
  useEffect(() => {
    if (location.pathname === "/") {
      setActive(0);
    }
    if (location.pathname === "/category") {
      setActive(1);
    }
    if (location.pathname === "/profile") {
      setActive(3);
    }
  }, [location.pathname]);
  const [active, setActive] = useState(0);
  const navigatePages = (url) => {
    if (url) {
      navigate(url);
    } else {
      dispatch(toggleShowSearch());
    }
  };
  if (location.pathname === "/auth") {
    return null;
  }
  return (
    <div className="bg-[#fff] lg:hidden  shadow-myShadowNavigation z-50 fixed w-full bottom-0 max-h-[4rem] px-6 rounded-t-xl">
      <ul className="flex relative justify-between">
        <div className={`absolute -top-5 w-full flex ${Menus[active].dis}`}>
          <span
            className={` duration-500 bg-[#ff6348]  border-4 border-[#fff] h-16 w-16 rounded-full `}
          ></span>
        </div>

        {Menus.map((menu, i) => {
          return (
            <li
              className="w-16"
              key={i}
              onClick={() => navigatePages(menu.url)}
            >
              <a
                onClick={() => setActive(i)}
                className="flex flex-col  text-center pt-6 items-center"
              >
                <span
                  className={`text-xl cursor-pointer duration-500 z-50 text-[#ff6348] ${
                    i === active && "-mt-6 !text-white"
                  }`}
                >
                  {menu.icon}
                </span>
                <span
                  className={`yekanBold whitespace-nowrap ${
                    active === i
                      ? "translate-y-[1rem] duration-700 bold text-[12px] text-gray-900 opacity-100"
                      : "opacity-0 translate-y-10 "
                  } `}
                >
                  {menu.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
