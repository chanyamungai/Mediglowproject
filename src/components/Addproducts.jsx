import React, { useState } from "react";
import axios from "axios";
import "../css/Addproducts.css";

const Addproducts = () => {

  // FORM STATES
  const [product_name, setProductName] = useState("");
  const [product_description, setProductDescription] = useState("");
  const [product_cost, setProductCost] = useState("");
  const [product_photo, setProductPhoto] = useState("");

  // UI STATES
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // IMAGE PREVIEW
  const [preview, setPreview] = useState("");

  // HANDLE IMAGE
  const handleImage = (e) => {
    const file = e.target.files[0];

    setProductPhoto(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // SUBMIT FORM
  const handlesubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");
    setSuccess("");

    try {

      const formdata = new FormData();

      formdata.append("product_name", product_name);
      formdata.append("product_description", product_description);
      formdata.append("product_cost", product_cost);
      formdata.append("product_photo", product_photo);

      const response = await axios.post(
        "https://chanyamungai.alwaysdata.net/api/add_product",
        formdata
      );

      setLoading(false);

      setSuccess(response.data.message);

      // RESET FORM
      setProductName("");
      setProductDescription("");
      setProductCost("");
      setProductPhoto("");
      setPreview("");

      e.target.reset();

      setTimeout(() => {
        setSuccess("");
      }, 4000);

    } catch (err) {

      setLoading(false);

      setError("Something went wrong. Please try again.");

      setTimeout(() => {
        setError("");
      }, 4000);
    }
  };

  return (
    <div className="addproduct-page">

      {/* BACKGROUND GLOW */}
      <div className="bg-circle one"></div>
      <div className="bg-circle two"></div>

      <div className="addproduct-card">

        {/* HEADER */}
        <div className="form-header">

          <span className="form-badge">
            ✨ Healthcare Product Upload
          </span>

          <h1>Add New Product</h1>

          <p>
            Upload skincare, oral care, or healthcare products
            to your MediGlow store.
          </p>

        </div>

        {/* ALERTS */}

        {success && (
          <div className="success-message">
            {success}
          </div>
        )}

        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {/* FORM */}

        <form onSubmit={handlesubmit}>

          {/* PRODUCT NAME */}
          <div className="input-group">

            <label>Product Name</label>

            <input
              type="text"
              placeholder="Enter product name"
              required
              value={product_name}
              onChange={(e) =>
                setProductName(e.target.value)
              }
            />
          </div>

          {/* DESCRIPTION */}
          <div className="input-group">

            <label>Description</label>

            <textarea
              placeholder="Write product description..."
              required
              value={product_description}
              onChange={(e) =>
                setProductDescription(e.target.value)
              }
            />
          </div>

          {/* PRICE */}
          <div className="input-group">

            <label>Product Price</label>

            <input
              type="number"
              placeholder="Enter product price"
              required
              value={product_cost}
              onChange={(e) =>
                setProductCost(e.target.value)
              }
            />
          </div>

          {/* IMAGE */}
          <div className="input-group">

            <label>Product Photo</label>

            <input
              type="file"
              accept="image/*"
              required
              onChange={handleImage}
            />

          </div>

          {/* IMAGE PREVIEW */}

          {preview && (
            <div className="preview-container">

              <img
                src={preview}
                alt="preview"
                className="preview-image"
              />

            </div>
          )}

          {/* BUTTON */}

          <button
            type="submit"
            className="submit-btn"
          >
            {loading ? "Uploading..." : "Add Product"}
          </button>

        </form>
      </div>
    </div>
  );
};

export default Addproducts;