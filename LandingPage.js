import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div style={{ textAlign: "center", background: "#e8ffe8", padding: "40px" }}>
      <h1>Green Haven</h1>
      <p>We bring nature to your home with our beautiful houseplants.</p>
      <Link to="/products">
        <button>Get Started</button>
      </Link>
    </div>
  );
}

export default LandingPage;
