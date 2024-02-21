import React, { useEffect, useState } from "react";
import { Cart, Star as StarFill } from "akar-icons";
import PurchaseStepCard from "./components/PurchaseCard"; 
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import AOS from "aos";
import "aos/dist/aos.css";

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  defaultRating: number;
}

// Product Kopi
const products: Product[] = [
  {
    id: 1,
    name: "Kopi Arabika",
    description: "Kopi dengan rasa yang lembut dan aroma yang khas.",
    image:
      "https://vibiznews.com/wp-content/uploads/2020/07/coffee-e1697784738839.jpg",
    defaultRating: 3, 
  },
  {
    id: 2,
    name: "Kopi Robusta",
    description:
      "Kopi dengan rasa yang kuat dan aroma yang pekat serta wangi.",
    image:
      "https://cdn0-production-images-kly.akamaized.net/k4d2p1w2MBf9YYuySB6SjZVt3rs=/1280x720/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3115289/original/055237000_1588144974-coffee-6125e319.jpg",
    defaultRating: 4, 
  },
  {
    id: 3,
    name: "Kopi Piccolo",
    description:
      "Kopi langka dengan rasa yang unik dan aroma yang istimewa.",
    image:
      "https://i.pinimg.com/564x/86/71/d8/8671d85f66240856514b5637eeaf7051.jpg",
    defaultRating: 5,
  },
];

// Step By Step Beli Cihuy
const purchaseSteps = [
  {
    stepNumber: 1,
    title: "Pilih Produk",
    description:
      "Pilih produk kopi yang ingin Anda beli dari daftar di atas.",
    image: "/service-1.png",
  },
  {
    stepNumber: 2,
    title: "Deliver",
    description:
      "Dapatkan pesanan Anda dengan cepat dan mudah dengan AstralExpress.",
    image: "/service-2.png",
  },
  {
    stepNumber: 3,
    title: "Konsumsi Kopi",
    description:
      "Nikmati segarnya kopi berkualitas di mana pun Anda berada.",
    image: "/service-3.png",
  },
];

const App: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      mirror: false,
    });
  }, []);

  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <section
        className="hero-section py-5"
        style={{ backgroundColor: "#FFA500", color: "#FFFFFF" }}
        data-aos="fade-up"
      >
        <div className="container">
          <h2 className="m-4 text-center">Product Populer</h2>
          <div
            className="card p-5 mb-3 border"
            style={{ backgroundColor: "#F8F9FA", color: "#000000" }}
          >
            <div className="row">
              <Slider className="text-black d-grid gap-4" {...productSettings}>
                {products.map((product) => (
                  <div key={product.id} className="col-md-4">
                    <div className="border p-4">
                      <ProductCard product={product} />
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>

      <section
        className="purchase-steps py-5"
        style={{ backgroundColor: "#FFFFFF", color: "#000000" }}
        data-aos="fade-left"
      >
        <div className="container">
          <h2 className="m-4 text-center">Cara Pembelian Servis</h2>
          <div className="row">
            {purchaseSteps.map((step) => (
              <div key={step.stepNumber} className="col-md-4">
                <PurchaseStepCard
                  stepNumber={step.stepNumber}
                  title={step.title}
                  description={step.description}
                  image={step.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [rating, setRating] = React.useState<number>(product.defaultRating); 

  const handleClick = (index: number) => {
    setRating(index + 1);
  };

  return (
    <div className="product card h-100 border-0 shadow-sm">
      <img
        className="card-img-top img-fluid"
        src={product.image}
        alt={product.name}
        style={{ objectFit: "cover", height: "200px" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.description}</p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            {Array.from({ length: 5 }, (_, index) => (
              <StarFill
                key={index}
                size={24}
                style={{
                  fill: index < rating ? "#FFD700" : "#C0C0C0",
                  cursor: "pointer",
                }}
                onClick={() => handleClick(index)}
              />
            ))}
          </div>
          <button className="btn btn-primary rounded-pill d-flex align-items-center">
            <Cart
              strokeWidth={2}
              size={24}
              style={{ verticalAlign: "middle" }}
            />
            <span className="ms-2">Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
