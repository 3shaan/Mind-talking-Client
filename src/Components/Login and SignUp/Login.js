import React from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import {
  MdAlternateEmail,
  MdFacebook,
  MdOutlineLock,
  MdPerson,
} from "react-icons/md";
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.text.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, email, password);
  };
  return (
    <div className="flex lg:w-9/12 mx-auto lg:gap-8">
      <div>
        <img
          src="https://rurutek.com/jio/assets/img/login-animate.gif"
          alt=""
        />
      </div>
      <div className="w-96 mt-5">
        <CustomCard
          effectColor="#C780FF" // required
          color="#14AEFF" // default color is white
          blur={10} // default blur value is 10px
          borderRadius={0} // default border radius value is 10px
        >
          <h1 className="text-2xl text-center my-3">Login</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email :</label>
            <label class="relative block mb-4 ">
              <MdAlternateEmail className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></MdAlternateEmail>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                class="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
                required
              />
            </label>
            <label htmlFor="password">Password :</label>
            <label class="relative block mb-4 ">
              <MdOutlineLock className="transition pointer-events-none w-6 h-6 absolute top-1/2 transform -translate-y-1/2 left-3"></MdOutlineLock>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                class="form-input transition-colors duration-200 py-3 pr-3 md:py-4 md:pr-4 lg:py-4 lg:pr-4 w-full focus:shadow-sm focus:outline-none leading-none placeholder-gray-400 appearance-none block pl-12  rounded-lg "
                required
              />
            </label>
            <button
              type="submit"
              class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full"
            >
              Submit
            </button>

            <p class="mt-8 text-center text-xs">or Login with</p>

            <ul class="mt-4 flex justify-center">
              <li class="mx-1">
                <button class="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#DB4437] rounded-full">
                  <AiOutlineGoogle className="text-white text-xl"></AiOutlineGoogle>
                </button>
              </li>
              <li class="mx-1">
                <button class="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#1DA1F2] rounded-full">
                  <AiOutlineGithub className="text-white text-xl"></AiOutlineGithub>
                </button>
              </li>
              <li class="mx-1">
                <button class="hover:shadow-lg transform transition hover:-translate-y-1 w-10 h-10 flex justify-center items-center bg-[#4267B2] rounded-full">
                  <MdFacebook className="text-white text-xl"></MdFacebook>
                </button>
              </li>
            </ul>
            <p className="text-xs mt-3 text-center">
              Don't have an account?
              <Link to={"/signup"} className="underline text-red-700 ml-2">
                Sign up
              </Link>
            </p>
          </form>
        </CustomCard>
      </div>
    </div>
  );
};

export default Login;