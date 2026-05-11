import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Signup.css";

const Signup = () => {
  // FORM STATE
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
  });

  // UI STATE
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();

      formdata.append("username", form.username);
      formdata.append("email", form.email);
      formdata.append("password", form.password);
      formdata.append("phone", form.phone);

      const response = await axios.post(
        "https://chanyamungai.alwaysdata.net/api/signup",
        formdata
      );

      setLoading(false);
      setSuccess(response.data.message);

      setForm({
        username: "",
        email: "",
        password: "",
        phone: "",
      });

      setTimeout(() => setSuccess(""), 4000);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong. Try again.");
      setTimeout(() => setError(""), 4000);
    }
  };

  return (
    <div className="signup-page">

      {/* BACKGROUND GLOW */}
      <div className="signup-glow one"></div>
      <div className="signup-glow two"></div>

      {/* CARD */}
      <div className="signup-card">

        {/* LEFT */}
        <div className="signup-left">

          <h1>
            Join <span>MediGlow</span>
          </h1>

          <p>
            Create your account and access skincare,
            health products and online doctors instantly.
          </p>

          <img
            src="https://images.unsplash.com/photo-1551076805-e1869033e561"
            alt="signup"
          />

        </div>

        {/* RIGHT */}
        <div className="signup-right">

          <h2>Create Account</h2>

          {loading && <p className="info">{loading}</p>}
          {success && <p className="success">{success}</p>}
          {error && <p className="error">{error}</p>}

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />

            <input
              type="number"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
            />

            <button type="submit">
              {loading ? "Creating..." : "Sign Up"}
            </button>

          </form>

          <p className="bottom-text">
            Already have an account?{" "}
            <Link to="/signin">Sign in</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Signup;