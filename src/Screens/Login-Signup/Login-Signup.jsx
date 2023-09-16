import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setToken, setUser } from "../../Redux/Slices/Auth-Slice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import "./Login-Signup.css";
import {
  useLoginMutation,
  useSignupMutation,
} from "../../Redux/Slices/AuthApi-Slice";

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

  const [
    signup,
    {
      isLoading: isSignupLoading = false,
      isError: isSignupError = false,
      error: signupError = "",
    },
  ] = useSignupMutation();
  const [
    login,
    {
      isLoading: isLoginLoading = false,
      isError: isLoginError = false,
      error: LoginError = "",
    },
  ] = useLoginMutation();

  const canSignup =
    [signupFormData.username, signupFormData.password].every(Boolean) &&
    !isSignupLoading;

  const canLogin =
    [loginFormData.username, loginFormData.password].every(Boolean) &&
    !isLoginLoading;

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
    if (canSignup) {
      try {
        const { user, token } = await signup(signupFormData).unwrap();
        dispatch(setUser(user));
        dispatch(setToken(token));
        navigate("/");
      } catch (err) {
        navigate("/user");
      }
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (canLogin) {
      try {
        const { user, token } = await login(loginFormData).unwrap();
        dispatch(setUser(user));
        dispatch(setToken(token));
        navigate("/");
      } catch (err) {
        navigate("/user");
      }
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
            {isSignupError ? (
              <p className="error-message text-danger ms-3 fw-bold">
                {signupError.data.message}
              </p>
            ) : null}
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
            <button disabled={!canSignup} onClick={handleSignUp}>
              {isSignupLoading ? <Spinner animation="border" /> : <>Sign up</>}
            </button>
          </form>
        </div>

        <div className="login">
          <form>
            <label htmlFor="choose" aria-hidden="true">
              Login
            </label>
            {isLoginError && (
              <p className="error-message text-danger ms-3 fw-bold">
                {LoginError.data.message}
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
            <button disabled={!canLogin} onClick={handleLogin}>
              {isLoginLoading ? <Spinner animation="border" /> : <>login</>}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
