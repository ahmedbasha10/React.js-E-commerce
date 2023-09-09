import React, { useRef, useState } from "react";
import "./Login-Signup.css";
import { useDispatch } from "react-redux";
import { login, signup } from "../../Api/api";
import { setToken, setUser } from "../../Redux/Slices/Auth-Slice";
import { useNavigate } from "react-router-dom";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const errorSignupField = useRef();
  const errorLoginField = useRef();
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupFormData({ ...signupFormData, [name]: value });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({ ...loginFormData, [name]: value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await signup(signupFormData);
      if (response.error) {
        errorSignupField.current.textContent = response.error;
      } else {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        navigate("/");
      }
    } catch (error) {
      errorSignupField.current.textContent = error;
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await login(loginFormData);
      if (response.error) {
        errorLoginField.current.textContent = response.error;
      } else {
        dispatch(setUser(response.data.user));
        dispatch(setToken(response.data.token));
        navigate("/");
      }
    } catch (error) {
      errorLoginField.current.textContent = error;
    }
  };

  return (
    <div className="forms">
      <div className="main">
        <input type="checkbox" id="choose" aria-hidden="true" />
        <div className="signup">
          <form>
            <label htmlFor="choose" aria-hidden="true">
              Sign up
            </label>
            <p
              className="error-message text-danger ms-3 fw-bold"
              ref={errorSignupField}
            ></p>
            <input
              type="text"
              name="username"
              placeholder="User name"
              required
              onChange={handleSignupChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleSignupChange}
            />
            <button onClick={handleSignUp}>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="choose" aria-hidden="true">
              Login
            </label>
            <p
              className="error-message text-danger ms-3 fw-bold"
              ref={errorLoginField}
            ></p>
            <input
              type="text"
              name="username"
              placeholder="User name"
              required
              onChange={handleLoginChange}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              onChange={handleLoginChange}
            />
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
