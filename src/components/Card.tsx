import React from "react";
import { useState, useEffect } from "react";
import { Cart, Star as StarFill } from "akar-icons";
import "../assets/Style/components/Card.scss";
interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  defaultRating: number;
  price: number;
  tags?: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: "Kopi Arabika",
    description: "Kopi dengan rasa yang lembut dan aroma yang khas.",
    image: "/product-4.png",
    defaultRating: 1,
    price: 21,
    tags: ["Hot"],
  },
  {
    id: 2,
    name: "Kopi Robusta",
    description: "Kopi dengan rasa yang kuat dan aroma yang pekat serta wangi.",
    image: "/product-5.png",
    defaultRating: 3,
    price: 24,
    tags: ["Cold"],
  },
  {
    id: 3,
    name: "Kopi Piccolo",
    description: "Kopi langka dengan rasa yang unik dan aroma yang istimewa.",
    image: "/product-6.png",
    defaultRating: 5,
    price: 25,
    tags: ["Hot"],
  },
  {
    id: 4,
    name: "Kopi Moccacinno",
    description: "Kopi langka dengan rasa yang unik dan aroma yang istimewa.",
    image: "/product-7.png",
    defaultRating: 2,
    price: 25,
    tags: ["Hot"],
  },
  {
    id: 5,
    name: "Kopi Latte",
    description: "Kopi langka dengan rasa yang unik dan aroma yang istimewa.",
    image: "/product-8.png",
    defaultRating: 4,
    price: 25,
    tags: ["Hot"],
  },
  {
    id: 6,
    name: "Kopi Cappucino",
    description: "Kopi langka dengan rasa yang unik dan aroma yang istimewa.",
    image: "/product-9.png",
    defaultRating: 2,
    price: 25,
    tags: ["Cold"],
  },
];

export default function Card() {
  const [ratings, setRatings] = useState<{ [key: number]: number }>({});
    const handleRatingChange = (productId: number, rating: number) => {
      setRatings((prevRatings) => ({
        ...prevRatings,
        [productId]: rating,
      }));
    };
  
    const notify = () => {
      console.log("Product added to cart!");
    };
  
  return (
    <>
       <div className="product-grid">
      {products.map((product) => (
        <div className="product card border-0 shadow-sm" key={product.id}>
          <img
            className="card-img-top img-fluid"
            src={product.image}
            alt={product.name}
          />
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h3 className="card-text fw-bold">{product.price} K</h3>
            <div className="d-flex justify-content-between align-items-center">
              {product.tags && (
                <div>
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="badge bg-warning"
                      style={{ cursor: "pointer" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
          <div className="stars-container">
                {Array.from({ length: 5 }, (_, index) => (
                  <StarFill
                    className=""
                    key={index}
                    size={24}
                    style={{
                      fill:
                        index < (ratings[product.id] ?? product.defaultRating)
                          ? "#FFD700"
                          : "#C0C0C0",
                      cursor: "pointer",
                    }}
                    onClick={() => handleRatingChange(product.id, index + 1)}
                  />
                ))}
              </div>
              <button
                onClick={notify}
                className="btn btn-warning rounded-pill d-flex align-items-center"
              >
              <Cart
                  strokeWidth={2}
                  size={20}
                  color="white"
                  style={{ verticalAlign: "middle", marginTop: "8px",}}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
