import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../config/firebase";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate("/");
      })
      .catch((e) => {
        if (
          e.message ===
          "The password is invalid or the user does not have a password."
        ) {
          alert("Please check your credentials again");
        } else if (
          e.message ===
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          alert("Please check your credentials again");
        } else {
          alert(e.message);
        }
      });
  };
  return (
    <div className="login">
      <img
        // src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="login__logo"
      />
      <div className="login__container">
        <h3>Log In To CarShare</h3>
        <form>
          <center>
            <input
              type="email"
              placeholder="Email Address"
              onChange={(event) => setEmail(event.target.value)}
            />
          </center>
          <center>
            <input
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </center>
          <center>
            <button type="submit" className="login__login" onClick={login}>
              Log In
            </button>
          </center>
          <center>
            <div className="sideinfo">
              <h5>Forgotten Password ?</h5>
              <h5 className="dot">.</h5>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <h5 className="rtd">Sign up for CarShare</h5>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
