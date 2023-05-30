import { Link } from "react-router-dom";
import classes from "./FeaturedProducts.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { BsFillCartPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/store";

const FeaturedProducts = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    fetch("https://nostra-app-server-side.onrender.com/get-most-popular")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProducts(data);
      });
  }, []);
  return (
    <div className={classes.outerContainer}>
      <div className={classes.topLine}>
        <span className={classes.heading}>Featured Products</span>
        <div style={{ width: "10px", height: "10px" }} />
      </div>
      <div className={classes.itemsOuterContainer}>
        <div className={classes.itemsInnerContainer}>
          {featuredProducts &&
            featuredProducts.map((product,index) => (
              index <= 5 &&
              <Link to={`/product-detail/${product._id}`} className={classes.link}>
                <div className={classes.productImageContainer}>
                  <img src={product.imageUrls[0]} className={classes.img} />
                </div>
                <div className={classes.productDetailContainer}>
                  <div className={classes.productNameAndPriceContainer}>
                    <span
                      style={{ color: "gray" }}
                      className={classes.productName}
                    >
                      {product.name}
                    </span>
                    <span
                      style={{
                        color: "black",
                        color: "black",
                        fontWeight: "500",
                        fontSize: "1.5rem",
                      }}
                      className={classes.productName}
                    >
                      ${product.price}
                    </span>
                  </div>
                  <div className={classes.cartIconContainer}>
                    <BsFillCartPlusFill
                      size={20}
                      color="#000000db"
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(userActions.addCart(product));
                      }}
                    />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
