import pic1 from "../assets/pic1.webp";
import pic2 from "../assets/pic2.jpg";

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
        <div>
          <h2>Nathan Birindwa</h2>
        </div>
        <div className="mt-1">
          The first 10 days of Trump's administration have been marked by an
          unprecedented barrage of barbaric policy moves and casual executive
          depravity.
        </div>
        <div className="mt-[10px] ">
          <img
            src={pic1}
            alt=""
            className="h-[59.778vh] w-[22vw] rounded-[10px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Post;
