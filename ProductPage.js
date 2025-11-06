import React, { useState } from "react";
import { useDispatch } from "react-redux";

const plants = [
  { id: 1, name: "Snake Plant", price: 299 },
  { id: 2, name: "Aloe Vera", price: 199 },
  { id: 3, name: "Peace Lily", price: 249 },
  { id: 4, name: "Money Plant", price: 149 },
  { id: 5, name: "Fern", price: 179 },
  { id: 6, name: "Spider Plant", price: 159 },
];

function ProductPage() {
  const dispatch = useDispatch();
  const [added, setAdded] = useState([]);

  const add = (p) => {
    dispatch({ type: "add", item: p });
    setAdded([...added, p.id]);
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Our Plants</h2>
      {plants.map((p) => (
        <div key={p.id}>
          <p>
            {p.name} - ₹{p.price}{" "}
            <button onClick={() => add(p)} disabled={added.includes(p.id)}>
              {added.includes(p.id) ? "Added" : "Add to Cart"}
            </button>
          </p>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
