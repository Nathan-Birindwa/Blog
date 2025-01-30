import { FaHouse } from "react-icons/fa6";
import { MdPushPin } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlinePersonOutline } from "react-icons/md";

const SideBar = () => {
  return (
    <div className="w-15 bg-black text-white h-screen flex flex-col justify-between items-center ">
      <div className="mt-5 text-3xl">
        <h1>B</h1>
      </div>
      <div className="flex-col ">
        <ul>
          <li>
            <a href="#">
              <FaHouse />
            </a>
          </li>
          <li>
            <a href="#">
              <IoSearch />
            </a>
          </li>
          <li>
            <a href="#">
              <FaPlus />
            </a>
          </li>
          <li>
            <a href="#">
              <FaRegHeart />
            </a>
          </li>
          <li>
            <a href="#">
              <MdOutlinePersonOutline />
            </a>
          </li>
        </ul>
      </div>
      <div className="flex-col mb-15">
        <ul>
          <li>
            <a href="#">
              <MdPushPin />
            </a>
          </li>
          <li>
            <a href="#">
              <CgDetailsMore />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
