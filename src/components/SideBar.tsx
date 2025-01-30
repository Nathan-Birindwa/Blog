import { useState } from "react";
import { MdPushPin, MdMoreVert } from "react-icons/md"; // Material Design Icons
import {
  HiOutlineHome,
  HiOutlineSearch,
  HiOutlinePlus,
  HiOutlineHeart,
  HiOutlineUser,
} from "react-icons/hi";

const SideBar = () => {
  const [activeIcon, setActiveIcon] = useState("home");

  const sideBarStyle = {
    background: "rgb(10, 10, 10)",
    fontSize: "1.6rem",
    position: "fixed", // Make the sidebar fixed
    top: 0,
    left: 0,
    width: "4%", // Set a fixed width for the sidebar
    height: "100vh", // Full height of the viewport
    zIndex: 1000, // Ensure it stays above other content
  };

  const iconStyle = {
    color: "rgb(86, 86, 86)",
  };

  const active = {
    color: "white",
  };

  // Function to handle icon clicks
  const handleIconClick = (iconName) => {
    setActiveIcon(iconName);
  };

  return (
    <div
      style={sideBarStyle}
      className="text-white flex flex-col justify-between items-center"
    >
      {/* Top Logo */}
      <div className="mt-5 text-3xl">
        <h1>B</h1>
      </div>

      {/* Middle Icons */}
      <div style={iconStyle} className="flex flex-col items-center gap-y-10">
        <ul className="flex flex-col items-center gap-y-10">
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("home")}
              style={activeIcon === "home" ? active : {}}
            >
              <HiOutlineHome />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("search")}
              style={activeIcon === "search" ? active : {}}
            >
              <HiOutlineSearch />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("plus")}
              style={activeIcon === "plus" ? active : {}}
            >
              <HiOutlinePlus />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("heart")}
              style={activeIcon === "heart" ? active : {}}
            >
              <HiOutlineHeart />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("profile")}
              style={activeIcon === "profile" ? active : {}}
            >
              <HiOutlineUser />
            </a>
          </li>
        </ul>
      </div>

      {/* Bottom Icons */}
      <div
        style={iconStyle}
        className="flex flex-col items-center gap-y-5 mb-7"
      >
        <ul className="flex flex-col items-center gap-y-5">
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("pin")}
              style={activeIcon === "pin" ? active : {}}
            >
              <MdPushPin />
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={() => handleIconClick("more")}
              style={activeIcon === "more" ? active : {}}
            >
              <MdMoreVert />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
