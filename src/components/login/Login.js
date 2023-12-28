import * as React from "react";

function Login(props) {
  return (
    <div className="bg-white pr-20 max-md:pr-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[59%] max-md:w-full max-md:ml-0">
          <img src="/logo1.png"
            className="aspect-[0.78] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"/>
        </div>
        <div className="flex flex-col items-stretch w-[41%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="flex flex-col items-stretch ml-9 self-start max-md:ml-2.5">
              <div className="text-black text-5xl font-bold max-md:text-4xl">
                Login
              </div>
              <br></br>
              <div className="text-black text-opacity-60 text-2xl whitespace-nowrap mt-10 max-md:mt-10">
                Please enter you sign in to login
              </div>
              <br></br>
            </div>
            <br></br>
             <div className="flex flex-row items-center justify-center max-w-full">
                            <input
                                placeholder="Email Address"
                                className="text-violet-500 text-lg whitespace-nowrap border bg-slate-50 grow justify-center pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"
                            />
                        </div>
                        <br></br>
                        <div className="flex flex-row items-center justify-center max-w-full">
                            <input type="password"
                                placeholder="Password"
                                className="text-violet-500 text-lg whitespace-nowrap border bg-slate-50 grow justify-center pl-6 pr-16 py-3 rounded-xl border-solid border-purple-300 items-start max-md:px-5"
                            />
                        </div>

            <div className="self-stretch flex w-full justify-between gap-5 mt-9 items-start max-md:max-w-full max-md:flex-wrap">
              <div className="flex gap-2 items-start">
              </div> <br></br>
              <a href="/logout" class="text-violet-400 text-2xl font-bold mt-1">
               Forgot Password?</a>
            </div> <br></br>
            <div className="flex flex-row items-center justify-center w-auto max-w-full">
              <button className="text-white text-md font-medium whitespace-nowrap bg-violet-500 self-stretch justify-center items-center px-40 py-4 rounded-3xl border-2 border-solid border-violet-500 max-md:px-3">
                Log in
              </button>
            </div>
            <div className="text-black text-opacity-60 text-2xl self-stretch mt-5 max-md:max-w-full">
              Don’t have an account{" "}
              <a href="/logout" class="font-extrabold">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}export default Login;


