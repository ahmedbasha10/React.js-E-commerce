import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Login, Signup } from "../../Redux/Slices/Auth-Slice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./Login-Signup.css";

const LoginSignup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signupFormData, setSignupFormData] = useState({
    username: "",
    password: "",
  });
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });

  const signupError = useSelector((state) => state.auth.signupError);
  const loginError = useSelector((state) => state.auth.loginError);
  const signuploading = useSelector((state) => state.auth.signuploading);
  const loginLoading = useSelector((state) => state.auth.loginloading);

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
    dispatch(Signup(signupFormData))
      .unwrap() // resolve promise
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/user");
      });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(Login(loginFormData))
      .unwrap()
      .then(() => {
        navigate("/");
      })
      .catch(() => {
        navigate("/user");
      });
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
            {signupError && (
              <p className="error-message text-danger ms-3 fw-bold">
                {signupError}
              </p>
            )}

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
            <button onClick={handleSignUp}>
              {signuploading ? <Spinner animation="border" /> : <>Sign up</>}
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="choose" aria-hidden="true">
              Login
            </label>
            {loginError && (
              <p className="error-message text-danger ms-3 fw-bold">
                {loginError}
              </p>
            )}
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
            <button onClick={handleLogin}>
              {loginLoading ? <Spinner animation="border" /> : <>login</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
