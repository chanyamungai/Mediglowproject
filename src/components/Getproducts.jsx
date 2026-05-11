import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/Getproducts.css";

const Getproducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  // Image Base URL
  const img_url =
    "https://chanyamungai.alwaysdata.net/static/images/";

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://chanyamungai.alwaysdata.net/api/get_products"
      );

      setProducts(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load products");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // LOADING
  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
        <h2>Loading products...</h2>
      </div>
    );
  }

  return (
    <div className="home-page">

      {/* ERROR */}
      {error && <h3 className="error-text">{error}</h3>}

      {/* HERO SECTION */}
      <section className="hero-section">

        <div className="hero-content">

          <span className="hero-badge">
            ✨ Trusted Health & Beauty Platform
          </span>

          <h1>
            Your Health & Beauty <br />
            <span>All In One Place</span>
          </h1>

          <p>
            Shop premium skincare and oral care products,
            connect with certified doctors, and take control
            of your wellness journey.
          </p>

          <div className="hero-buttons">
           
            <button
              className="secondary-btn"
              onClick={() => navigate("/consult")}
            >
              Consult Doctor
            </button>
          </div>

          {/* STATS */}
          <div className="hero-stats">

            <div className="stat-box">
              <h2>500+</h2>
              <p>Products</p>
            </div>

            <div className="stat-box">
              <h2>50+</h2>
              <p>Doctors</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Support</p>
            </div>

          </div>
        </div>

        {/* HERO IMAGE */}
        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309"
            alt="healthcare"
          />

          <div className="floating-card">
            <h4>🌿 Healthy Skin</h4>
            <p>Glow naturally with trusted products.</p>
          </div>

        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">

        <div className="section-header">
          <h2>🌿 Glow Essentials</h2>

          <p>
            Curated skincare and wellness products
            for your daily self-care.
          </p>
        </div>

        <div className="products-grid">

          {products.map((product, index) => (
            <div className="product-card" key={index}>

              <div className="product-image">

                <img
                  src={img_url + product.product_photo}
                  alt={product.product_name}
                />

              </div>

              <div className="product-info">

                <h3>{product.product_name}</h3>

                <p>
                  {product.product_description.slice(0, 90)}...
                </p>

                <div className="product-bottom">

                  <h4>Ksh {product.product_cost}</h4>

                  <button
                    className="buy-btn"
                    onClick={() =>
                      navigate("/makepayment", {
                        state: { product },
                      })
                    }
                  >
                    Buy Now
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="whyus-section">

        <div className="section-header">
          <h2>Why Choose MediGlow?</h2>

          <p>
            Trusted healthcare and beauty services built
            around your comfort and wellness.
          </p>
        </div>

        <div className="whyus-grid">

          <div className="why-card">
            <span>🌿</span>
            <h3>Safe Products</h3>
            <p>
              Carefully selected skincare and health products.
            </p>
          </div>

          <div className="why-card">
            <span>👨‍⚕️</span>
            <h3>Certified Doctors</h3>
            <p>
              Get online consultations from professionals.
            </p>
          </div>

          <div className="why-card">
            <span>⚡</span>
            <h3>Fast Delivery</h3>
            <p>
              Receive your products quickly and safely.
            </p>
          </div>

          <div className="why-card">
            <span>🔒</span>
            <h3>Private & Secure</h3>
            <p>
              Your medical information stays confidential.
            </p>
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="services-section">

        <div className="section-header">
          <h2>Our Services</h2>

          <p>
            Everything you need for your wellness journey.
          </p>
        </div>

        <div className="services-grid">

          <div className="service-card">
            <span>🧴</span>
            <h3>Skin Care</h3>
            <p>Glow-enhancing skincare routines & products.</p>
          </div>

          <div className="service-card">
            <span>🦷</span>
            <h3>Oral Health</h3>
            <p>Professional oral care and hygiene support.</p>
          </div>

          <div className="service-card">
            <span>👨‍⚕️</span>
            <h3>Doctor Chat</h3>
            <p>Instant online consultation with doctors.</p>
          </div>

          <div className="service-card">
            <span>🛒</span>
            <h3>Health Shop</h3>
            <p>Buy trusted products anytime online.</p>
          </div>

        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials-section">

        <div className="section-header">
          <h2>What Users Say</h2>
        </div>

        <div className="testimonials-grid">

          <div className="testimonial-card">
            <p>
              “The consultation was quick and professional.
              I got the help I needed instantly.”
            </p>

            <h4>— Amina K.</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Their skincare products completely transformed
              my skin confidence.”
            </p>

            <h4>— Brian M.</h4>
          </div>

          <div className="testimonial-card">
            <p>
              “Reliable products, beautiful design,
              and excellent support.”
            </p>

            <h4>— Sharon W.</h4>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">
            <h2>MediGlow</h2>

            <p>
              Your trusted health, beauty,
              and wellness partner.
            </p>
          </div>

          <div className="footer-contact">
            <h3>Contact</h3>

            <p>support@mediglow.com</p>
            <p>+254 700 000 000</p>
            <p>Nairobi, Kenya</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} MediGlow.
            All rights reserved.
          </p>

          <b>Developed by Chanya ✨</b>
        </div>
      </footer>
    </div>
  );
};

export default Getproducts;