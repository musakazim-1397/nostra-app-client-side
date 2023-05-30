import React, { useEffect, useState } from "react";
import classes from "./HeroImages.module.css";

const HeroImages = () => {
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();
  const [product3, setProduct3] = useState();
  const [product4, setProduct4] = useState();

  useEffect(() => {
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/Nike smart sneaker")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct1(data[0]);
      });
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/Nike Bag")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct2(data[0]);
      });
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/ultraboost")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct3(data[0]);
      });
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/Adidas Shoes")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setProduct4(data[0]);
      });
  }, []);
  return (
    <div id="hero-images" className={classes.outerContainer}>
    <div className={classes.container}>
      {product1 && (
        <div className={classes.leftImageContainer}>
          <img
            src={product1.imageUrls[0]}
            alt="product1"
            className={classes.leftImage}
          />
          <div className={classes.leftImageText}>
            <h1 className={classes.leftProductName}>{product1?.name}</h1>
            <p className={classes.leftProductDescription}>
              {product1?.description.substring(0, 50) + "..."}
            </p>
            <span className={classes.leftProductPrice}>${product1.price}</span>
          </div>
        </div>
      )}
      <div className={classes.rightImageContainer}>
        {product2 && (
          <div className={classes.rightImageContainerTop}>
            <img
              src={product2.imageUrls[0]}
              alt="product2"
              className={classes.rightImageTop}
            />
            <div className={classes.rightImageText}>
              <h1 className={classes.rightProductName}>{product2?.name}</h1>
              <p className={classes.rightProductDescription}>
                {product2?.description.substring(0, 50) + "..."}
              </p>
              <span className={classes.rightProductPrice}>
                ${product2.price}
              </span>
            </div>
          </div>
        )}
        <div className={classes.rightImageContainerBottom}>
          {product3 && (
            <div className={classes.rightImageContainerBottomLeft}>
              <img
                src={product3.imageUrls[0]}
                alt="product3"
                className={classes.rightImage}
              />
              <div className={classes.rightImageText}>
                <h1 className={classes.rightProductName}>{product3?.name}</h1>
                <p className={classes.rightProductDescription}>
                  {product3?.description.substring(0, 50) + "..."}
                </p>
                <span className={classes.rightProductPrice}>
                  ${product3.price}
                </span>
              </div>
            </div>
          )}
          {product4 && (
            <div className={classes.rightImageContainerBottomRight}>
              <img
                src={product4.imageUrls[0]}
                alt="product4"
                className={classes.rightImage}
              />
              <div className={classes.rightImageText}>
                <h1 className={classes.rightProductName}>{product4?.name}</h1>
                <p className={classes.rightProductDescription}>
                  {product4?.description.substring(0, 50) + "..."}
                </p>
                <span className={classes.rightProductPrice}>
                  ${product4.price}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </div>
  );
};

export default HeroImages;
