import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.jpg";
import { IoIosHeartEmpty } from "react-icons/io";
import { HiOutlineChatBubbleOvalLeft } from "react-icons/hi2";
import { BiRepost } from "react-icons/bi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import React from "react";

const Post = () => {
  return (
    <div className="flex">
      <div className="profile-pic">
        <a href="">
          <img src={pic2} alt="" />
        </a>
      </div>
      <div className="ml-[11px]">
        <div className="flex gap-2">
          <h2 className="font-bold">Nathan Birindwa</h2>
          <p className="text-[15px] mt-0.3 text-[rgb(109,109,109)]">22h</p>
        </div>
        <div className="mt-1">
          The first 10 days of Trump's administration have been marked by an
          unprecedented barrage of barbaric policy moves and casual executive
          depravity.
        </div>
        <div className="mt-[10px] ">
          <img src={pic1} alt="" className="h-[59.778vh]  rounded-[10px]" />
        </div>
        <div className="flex mt-[1.2rem] gap-6">
          <a
            href="#"
            className="post-icon flex items-center gap-x-1 text-[rgb(109,109,109)] text-base"
          >
            <IoIosHeartEmpty className="text-2xl" />
            <p>1.2k</p>
          </a>
          <a
            href="#"
            className="post-icon flex items-center gap-x-1 text-[rgb(109,109,109)] text-base"
          >
            <HiOutlineChatBubbleOvalLeft className="text-2xl" />
            <p>1.2k</p>
          </a>
          <a
            href="#"
            className="post-icon flex items-center gap-x-1 text-[rgb(109,109,109)] text-base"
          >
            <BiRepost className="text-2xl" />
            <p>1.2k</p>
          </a>
          <a
            href="#"
            className="post-icon flex items-center gap-x-1 text-[rgb(109,109,109)] text-base"
          >
            <IoPaperPlaneOutline className=" text-2xl" />
            <p>1.2k</p>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Post;
