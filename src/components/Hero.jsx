import React from "react";
import "../../src/App";
import product1 from "../../../images/image-product-1.jpg";
import product1_thumbnail from "../../../images/image-product-1-thumbnail.jpg";
import product2 from "../../../images/image-product-2.jpg";
import product2_thumbnail from "../../../images/image-product-2-thumbnail.jpg";
import product3 from "../../../images/image-product-3.jpg";
import product3_thumbnail from "../../../images/image-product-3-thumbnail.jpg";
import product4 from "../../../images/image-product-4.jpg";
import product4_thumbnail from "../../../images/image-product-4-thumbnail.jpg";
import useGlobalContext from "../context/context";

export const productThumbnail = [
  product1_thumbnail,
  product2_thumbnail,
  product3_thumbnail,
  product4_thumbnail,
];
export const productImage = [product1, product2, product3, product4];

const Hero = () => {
  const {
    cart,
    product,
    setProduct,
    amount,
    increaseAmount,
    decreaseAmount,
    addToCart,
    setSessionData
  } = useGlobalContext();

  return (
    <>
      <section className="section-resposive m-7 mx-auto w-9 flex justify-content-around ">
        <div className="flex flex-column sm:flex-column align-items-center">
          <div className="w-12">
            <img
              src={product}
              alt="product1"
              className="w-12 h-26rem border-round-xl fadein animation-duration-1000 animation-iteration-1"
            />
          </div>
          <div className="lg:flex flex-row justify-content-between  w-12 mt-4 sm:hidden">
            {productThumbnail.map((image, index) => {
              return (
                <div key={index}>
                  <img
                    src={image}
                    alt={`thumbnail+${index + 1}`}
                    className="w-12 h-5rem border-round-2xl"
                    onClick={() => {
                      setProduct(productImage[index]);
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:w-6">
          <div className="flex flex-column justify-content-between mt-5">
            <h3 className="pb-5 text-red-500">SNEAKER COMPANY</h3>
            <h1 className="pb-5 text-6xl">Fall Limited Edition Snakers</h1>
            <p className="text-xl pb-5">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer
            </p>
            <h2 className="text-3xl mb-1">
              $125.00
              <span className="bg-gray-300 p-1 text-orange-500 text-xl ml-4">
                50%
              </span>
            </h2>
            <h3 className=" pb-6">
              <s className="discount text-gray-500">$250.00</s>
            </h3>
            <div className=" div-responsive flex justify-content-between  ">
              <div className=" button w-12 ">
                <button
                  type="button"
                  className=" p-1 text-3xl border-none w-4"
                  onClick={decreaseAmount}
                >
                  -
                </button>
                <span className="p-3 text-2xl">{amount}</span>
                <button
                  type="button"
                  className="p-1 text-3xl border-none w-4"
                  onClick={increaseAmount}
                >
                  +
                </button>
              </div>
              <div className="flex justify-content-start w-12 p-0 ">
                <button
                  onClick={() => {
                    addToCart();
                    setSessionData;
                  }}
                  className="addButton p-1  w-12 border-none bg-yellow-500 text-white text-lg border-round-xl "
                >
                  <span className="pi pi-cart-plus mr-3 text-xl"></span>Add to
                  Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by Asif Saba
      </div>
    </>
  );
};

export default Hero;
