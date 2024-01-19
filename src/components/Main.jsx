import React, { useState, useEffect } from "react";

import img1 from "../assets/image-product-1-thumbnail.jpg";
import img2 from "../assets/image-product-2-thumbnail.jpg";
import img3 from "../assets/image-product-3-thumbnail.jpg";
import img4 from "../assets/image-product-4-thumbnail.jpg";

import url1 from "../assets/image-product-1.jpg";
import url2 from "../assets/image-product-2.jpg";
import url3 from "../assets/image-product-3.jpg";
import url4 from "../assets/image-product-4.jpg";

import cancel from "../assets/icon-close.svg";
import prev from "../assets/icon-previous.svg";
import next from "../assets/icon-next.svg";

import minus from "../assets/icon-minus.svg";
import plus from "../assets/icon-plus.svg";
import cart from "../assets/icon-cart.svg";

const products = [
  {
    id: 1,
    url_thumbnail: img1,
    url: url1,
    alt: "product 1",
  },
  {
    id: 2,
    url_thumbnail: img2,
    url: url2,
    alt: "product 2",
  },
  {
    id: 3,
    url_thumbnail: img3,
    url: url3,
    alt: "product 3",
  },
  {
    id: 4,
    url_thumbnail: img4,
    url: url4,
    alt: "product 4",
  },
];

const Main = ({ onCounterChange, onShowCartItems }) => {
  const [viewProduct, setVeiwProduct] = useState(products[0].url);
  const [lightBox, setLightBox] = useState(false);
  const [activeElement, setActiveElement] = useState(null);
  const [value, setValue] = useState(0);

  const handleElementClick = (id) => {
    setActiveElement(id);
  };

  const productElements = products.map((product, index) => (
    <img
      key={product.id}
      src={product.url_thumbnail}
      alt={product.alt}
      onClick={() => {
        setVeiwProduct(product.url);
        handleElementClick(index);
      }}
      className={`product ${index === activeElement ? "active" : ""}`}
    />
  ));

  const handlePrevClick = () => {
    const prevIndex = (activeElement - 1 + products.length) % products.length;
    setVeiwProduct(products[prevIndex].url);
    setActiveElement(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (activeElement + 1) % products.length;
    setVeiwProduct(products[nextIndex].url);
    setActiveElement(nextIndex);
  };

  const handleIncrement = () => {
    const newValue = value + 1;
    setValue(newValue);
    onCounterChange(newValue);
  };

  const handleDecrement = () => {
    if (value > 0) {
      const newValue = value - 1;
      setValue(newValue);
      onCounterChange(newValue);
    }
  };

  return (
    <main className="flex">
      <div className="products_preview">
        <img
          src={viewProduct}
          alt="product image"
          className="preview"
          onClick={() => setLightBox(true)}
        />
        <div className="products flex">{productElements}</div>
      </div>
      <div className="product_details">
        <div className="company_name">Sneaker Company</div>
        <h1 className="product_title">Fall Limited Edition Sneakers</h1>
        <p className="product_desc">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="costs">
          <div className="prices flex">
            <p className="discounted_price">$125.00</p>
            <p className="discount_rate">
              <span>50%</span>
            </p>
          </div>
          <p className="prev_price">$250.00</p>
        </div>

        <div className="cart flex">
          <div className="remote flex">
            <img src={minus} alt="minus" onClick={handleDecrement} />
            <p>{value}</p>
            <img src={plus} alt="plus" onClick={handleIncrement} />
          </div>
          <button
            className="add_cart flex"
            onClick={() => onShowCartItems(value)}
          >
            <svg width="22" height="20" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                fill="#FFFFFF"
                fillRule="nonzero"
              />
            </svg>
            Add to cart
          </button>
        </div>
      </div>

      {lightBox && (
        <div className="fixed">
          <div className="lightbox">
            <img
              src={cancel}
              alt="cancel lightbox"
              className="cancel"
              onClick={() => setLightBox(false)}
            />
            <div className="products_preview">
              <div className="prev">
                <img src={prev} alt="" onClick={handlePrevClick} />
              </div>
              <img src={viewProduct} alt="product image" className="preview" />
              <div className="next">
                <img src={next} alt="" onClick={handleNextClick} />
              </div>
              <div className="products flex">{productElements}</div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default Main;
