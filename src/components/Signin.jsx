import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../css/Signin.css";

const Signin = () => {

  // STATES
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI STATES
  const [loading, setLoading] = useState("");
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // SIGN IN FUNCTION
  const handlesubmit = async (e) => {

    e.preventDefault();

    setLoading("Authenticating your account...");
    setError("");
    setSuccess("");

    try {

      const formdata = new FormData();

      formdata.append("email", email);
      formdata.append("password", password);

      const response = await axios.post(
        "https://chanyamungai.alwaysdata.net/api/signin",
        formdata
      );

      setLoading("");

      if (response.data.user) {

        localStorage.setItem(
          "user",
          JSON.stringify(response.data.user)
        );

        setSuccess("Login successful ✨");

        setTimeout(() => {
          navigate("/");
        }, 1500);

      } else {

        setError("Invalid email or password");

      }

    } catch (err) {

      setLoading("");
      setError("Oops! Something went wrong.");

    }
  };

  return (

    <div className="signin-page">

      {/* GLOW EFFECTS */}
      <div className="circle one"></div>
      <div className="circle two"></div>

      {/* CARD */}
      <div className="signin-card">

        {/* LEFT SIDE */}
        <div className="signin-left">

          <span className="signin-badge">
            ✨ Welcome Back
          </span>

          <h1>
            Sign In To <span>MediGlow</span>
          </h1>

          <p>
            Access your healthcare dashboard,
            products, and online consultations.
          </p>

          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561"
          alt="healthcare login"
          />

        </div>

        {/* RIGHT SIDE */}
        <div className="signin-right">

          <h2>Login Account</h2>

          {/* STATUS */}

          {loading && (
            <div className="loading-msg">
              {loading}
            </div>
          )}

          {success && (
            <div className="success-msg">
              {success}
            </div>
          )}

          {error && (
            <div className="error-msg">
              {error}
            </div>
          )}

          {/* FORM */}

          <form onSubmit={handlesubmit}>

            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) =>
                  setEmail(e.target.value)
                }
              />

            </div>

            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) =>
                  setPassword(e.target.value)
                }
              />

            </div>

            <button
              type="submit"
              className="signin-btn"
            >
              Sign In
            </button>

          </form>

          {/* FOOTER */}

          <div className="signin-footer">

            <p>
              Don’t have an account?
              <Link to="/signup">
                Register
              </Link>
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Signin;