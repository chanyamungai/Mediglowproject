import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../css/Makepayment.css";

const Makepayment = () => {
  const { product } = useLocation().state || {};
  const navigate = useNavigate();

  const img_url =
    "https://chanyamungai.alwaysdata.net/static/images/";

  // STATES
  const [number, setNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // SAFETY CHECK (important fix)
  if (!product) {
    return (
      <div className="payment-error-page">
        <h2>No product selected</h2>
        <button onClick={() => navigate("/")}>
          Go Back Home
        </button>
      </div>
    );
  }

  // PAY FUNCTION
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const formdata = new FormData();

      formdata.append("phone", number);
      formdata.append("amount", product.product_cost);

      const response = await axios.post(
        "https://chanyamungai.alwaysdata.net/api/mpesa_payment",
        formdata
      );

      setLoading(false);
      setSuccess(response.data.message);

    } catch (err) {
      setLoading(false);
      setError("Payment failed. Try again.");
    }
  };

  return (
    <div className="payment-page">

      {/* BACK BUTTON */}
      <button
        className="back-btn"
        onClick={() => navigate(-1)}
      >
        ← Back
      </button>

      {/* CARD */}
      <div className="payment-card">

        {/* IMAGE */}
        <div className="payment-image-box">
          <img
            src={img_url + product.product_photo}
            alt={product.product_name}
          />
        </div>

        {/* DETAILS */}
        <div className="payment-details">

          <h2>{product.product_name}</h2>

          <p>{product.product_description}</p>

          <h3 className="price">
            KES {product.product_cost}
          </h3>

          {/* STATUS */}
          {success && (
            <p className="success-msg">{success}</p>
          )}

          {error && (
            <p className="error-msg">{error}</p>
          )}

          {/* FORM */}
          <form onSubmit={handlesubmit}>

            <label>M-Pesa Number</label>

            <input
              type="tel"
              placeholder="2547XXXXXXXX"
              value={number}
              onChange={(e) =>
                setNumber(e.target.value)
              }
              required
            />

            <button
              type="submit"
              disabled={loading}
              className="pay-btn"
            >
              {loading ? "Processing..." : "Pay Now"}
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Makepayment;