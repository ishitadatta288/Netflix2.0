import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "./Header";
import axios from "axios";
import { API_END_POINT } from "../utils/constant.js";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../redux/userSlice.jsx";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const isLoading = useSelector((store) => store.app.isLoading);

  const loginHandler = () => {
    setIsLogin(!isLogin);
  };

  const getInputData = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    if (isLogin) {
      // login
      const user = { email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/login`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.message) {
          toast.success(res.data.message);
        }
        dispatch(setUser(res.data.user));
        navigate("/browse");
        // Add logic to handle successful login, e.g., navigate to dashboard
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      } finally {
        dispatch(setLoading(false));
      }
    } else {
      // register
      const user = { fullName, email, password };
      try {
        const res = await axios.post(`${API_END_POINT}/register`, user, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });

        if (res.data.message) {
          toast.success(res.data.message);
        }
        setIsLogin(true);
      } catch (error) {
        toast.error(error.response.data.message);
        console.log(error);
      }finally {
        dispatch(setLoading(false));
      }
    }
  };

  // State management
  const [isLogin, setIsLogin] = useState(location.state?.isLogin ?? false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const toggleLogin = () => setIsLogin(!isLogin);

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://subham2942.github.io/Netflix-sign-In-Clone/images/background.jpg"
          alt="background"
        />
      </div>

      <form
        onSubmit={getInputData}
        className="flex flex-col w-96 my-36 p-14 left-0 right-0 items-center justify-center mx-auto absolute bg-black opacity-80 rounded-2xl"
      >
        <h1 className="text-3xl text-white mb-5 font-bold">
          {isLogin ? "Login" : "Sign Up"}
        </h1>

        <div className="flex flex-col gap-1">
          {!isLogin && (
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="Full Name"
              className="p-3 my-2 rounded-sm bg-gray-800 text-white w-64"
            />
          )}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
            className="p-3 my-2 rounded-sm bg-gray-800 text-white w-64"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
            className="p-3 my-2 rounded-sm bg-gray-800 text-white w-64"
          />
          <button
            type="submit"
            className="bg-red-700 py-3 w-full mt-3 text-white hover:bg-red-500 rounded-md font-medium"
          >
            {`${isLoading ? "loading..." : (isLogin ? "Login" : "Sign Up")}`}
          </button>
          <p className="text-white mt-2">
            {isLogin ? "New to Netflix?" : "Already have an account?"}
            <span
              onClick={toggleLogin}
              className="ml-2 text-blue-500 font-medium cursor-pointer"
            >
              {isLogin ? "Sign Up" : "Login"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
