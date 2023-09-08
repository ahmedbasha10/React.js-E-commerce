import React from "react";
import "./Login-Signup.css";

const LoginSignup = () => {
  return (
    <div className="forms">
      <div className="main">
        <input type="checkbox" id="choose" aria-hidden="true" />
        <div className="signup">
          <form>
            <label for="choose" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              name="usename"
              placeholder="User name"
              required
            />
            <input type="email" name="emial" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Sign up</button>
          </form>
        </div>

        <div className="login">
          <form>
            <label for="choose" aria-hidden="true">
              Login
            </label>
            <input type="email" name="email" placeholder="Email" required />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
