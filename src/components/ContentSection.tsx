import Post from "./Post";
import { Outlet, Link } from "react-router-dom";

const ContentSection = () => {
  return (
    <div
      className="flex justify-between items-center h-screen w-screen relative"
      style={{ color: "white", background: "rgb(10, 10, 10)" }}
    >
      {/* Centered Home Div */}
      <div
        className="mt-4 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "43%",
          height: "100vh",
        }}
      >
        <div className="text-center">
          <h1>Home</h1>
        </div>

        <div className="mt-4 bg-[rgb(24,24,24)] h-[83.556vh] rounded-tr-3xl rounded-tl-3xl border border-[rgb(45,45,45)] p-4">
          <Post />
        </div>
      </div>

      {/* Login Button at Top Right */}
      <div className="absolute top-4 right-4 mr-8 bg-white rounded-[12px] pl-4 pr-4 mt-3.5   pt-1 pb-1.5 text-black font-semibold">
        {/* <a href="#">Log in</a> */}
        <Link to="/login">Login</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default ContentSection;
