import React, { useState } from "react";
import "../css/SkinHealthChecker.css";

const SkinHealthChecker = () => {
  const [form, setForm] = useState({
    skinType: "",
    concern: "",
    duration: "",
  });

  const [result, setResult] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleCheck = (e) => {
    e.preventDefault();

    let message = "";
    let advice = "";

    if (form.concern === "acne") {
      message = "You may have acne-prone skin";
      advice = "Use gentle cleanser and avoid oily products.";
    } else if (form.concern === "dryness") {
      message = "Your skin is dry or dehydrated";
      advice = "Use moisturizer and drink more water.";
    } else if (form.concern === "darkspots") {
      message = "You may have hyperpigmentation";
      advice = "Use sunscreen and vitamin C products.";
    } else {
      message = "General skin check completed";
      advice = "Maintain a healthy skincare routine.";
    }

    setResult({ message, advice });
  };

  return (
    <div className="checker-page">

      {/* HEADER */}
      <div className="checker-header">
        <h1>🌿 Skin & Health Checker</h1>
        <p>Get instant insights about your skin condition</p>
      </div>

      {/* FORM */}
      <div className="checker-card">
        <form onSubmit={handleCheck}>

          <label>Skin Type</label>
          <select name="skinType" onChange={handleChange} required>
            <option value="">Select skin type</option>
            <option value="oily">Oily</option>
            <option value="dry">Dry</option>
            <option value="normal">Normal</option>
            <option value="combination">Combination</option>
          </select>

          <label>Main Concern</label>
          <select name="concern" onChange={handleChange} required>
            <option value="">Select concern</option>
            <option value="acne">Acne</option>
            <option value="dryness">Dryness</option>
            <option value="darkspots">Dark Spots</option>
            <option value="sensitivity">Sensitivity</option>
          </select>

          <label>Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="e.g. 2 weeks"
            onChange={handleChange}
            required
          />

          <button type="submit">Check My Skin</button>

        </form>
      </div>

      {/* RESULT */}
      {result && (
        <div className="result-card">
          <h2>🧠 Result</h2>
          <p className="result-msg">{result.message}</p>
          <p className="result-advice">{result.advice}</p>
        </div>
      )}

    </div>
  );
};

export default SkinHealthChecker;