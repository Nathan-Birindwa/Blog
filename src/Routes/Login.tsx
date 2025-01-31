const Login = () => {
  return (
    <div className="loginStyle flex  justify-center items-center h-screen">
      <div className=" w-[30%] p-8 rounded-lg text-center shadow-md login-style">
        {" "}
        <h3 className="text-[16px]  font-bold mb-4">
          Log in with your db account
        </h3>{" "}
        <div className="mb-4  login-style">
          {" "}
          <input
            type="text"
            placeholder="Username, phone or email"
            className="pt-4 pb-4 w-full p-2 border rounded-[12px] mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            className="pt-4 pb-4 w-full p-2 border rounded-[12px]"
          />
        </div>
        <button className="pt-4 pb-4 w-full bg-white text-black font-bold py-2 px-4 rounded-[12px]">
          Log in
        </button>
        <div className="mt-4 text-center">
          {" "}
          <a href="#" className="text-zinc-500">
            Forgot password?
          </a>{" "}
        </div>
        <p>
          don't have an{" "}
          <a href="" style={{ color: "blue" }}>
            account?
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
