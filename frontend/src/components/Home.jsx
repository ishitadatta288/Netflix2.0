import React from "react";
//import { IoIosArrowDropdown } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
  return (
    <div>
      {/* Header Section */}
      <div className="absolute flex w-full items-center justify-between px-20 bg-gradient-to-b from-black z-10 py-10">
        <img
          className="w-32"
          src="https://www.techdaily.com.au/b2/wp-content/uploads/2015/03/Netflix_Logo_Print_FourColorCMYK.png"
          alt="netflix-logo"
        />
        <div className="flex items-center">
          {/* Language Dropdown */}
          <select className="ml-4 bg-transparent text-white border border-gray-500 px-2 py-1 rounded-md">
            <option className="text-black">English</option>
            <option className="text-black">हिन्दी</option>
          </select>

          {/* Sign In Button */}
          <button className="ml-4 bg-red-700 text-white px-4 py-2 rounded-md hover:bg-red-500" 
          onClick={() => navigate("/login", { state: { isLogin: true } })}>
            Sign In
          </button>
        </div>
      </div>

      {/* Background Image Section */}
      <div className="relative w-full h-screen">
        <div className=" absolute inset-0 bg-gradient-to-b from-transparent to-black">
          <img
            className="w-full h-full object-cover"
            src="https://subham2942.github.io/Netflix-sign-In-Clone/images/background.jpg"
            alt="Background"
          />

          {/* Overlay for Better Readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Centered Text Over Image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white z-10 p-20">
            <h1 className="text-6xl font-bold">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="text-xl mt-4 font-semibold">
              Watch anywhere. Cancel anytime.
            </p>
            <p className=" text-lg mt-8">
              Ready to watch? Enter your email to create your account.
            </p>
            <div className=" mt-2 w-full flex gap-2 items-center">
              <input
                type="email"
                placeholder=" Email Address"
                className=" mt-4 p-3 rounded-md w-96 bg-gray-800 opacity-75"
              />
              <button className=" bg-red-700 p-3 rounded-md items-center flex px-5 mt-4 hover:bg-red-600" onClick={() => navigate("/login", { state: { isLogin: false } })}>
                Get Started
                <FaAngleRight className=" ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
