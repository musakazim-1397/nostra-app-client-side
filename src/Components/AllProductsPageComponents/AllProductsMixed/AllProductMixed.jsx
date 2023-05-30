import { useEffect, useState } from "react";
import classes from "./AllProductsMixed.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { userActions } from "../../../store/store";

const AllProductsMixed = () => {
    const [allProducts, setAllProducts] = useState([]);
    const reduxState = useSelector(state => state);
    const dispatch = useDispatch();

useEffect(() => {
    fetch('https://nostra-app-server-side.onrender.com/get-all-products').then(res => res.json()).then(data => {
        setAllProducts(data);
    })
}, [reduxState.products])

  return (
    <div className={classes.container}>
      <div id="new-arrivals" className={classes.topHeadingContainer}>
        <h1 className={classes.topHeading}>All Products</h1>
        <span className={classes.topPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className={classes.newArrivalsContainer}>
      {
        allProducts && allProducts.map((item, index) => {
            return (
              <Link to={`/product-detail/${item._id}`} key={index} style={{textDecoration: "none", color:'inherit'}}>
                <div className={classes.productContainer}>
                <div className={classes.productImageContainer}>
                    <img
                    className={classes.productImage}
                    src={item.imageUrls[0]}
                    alt="product"
                    />
                </div>
                <div className={classes.productDetailAndCartContainer}>
                  <div className={classes.productDetailsContainer}>
                    <span className={classes.productName}>{item.name}</span>
                    <span className={classes.productPrice}>${item.price}</span>
                  </div>
                  <div className={classes.addToCartContainer}>
                    <AiOutlineShoppingCart
                      className={classes.cartIcon}
                      size={20}
                      onClick={()=>dispatch(userActions.addCart(item._id))}
                    />
                  </div>
                </div>
                </div>
                </Link>
            );
            })
      }
      </div>
    </div>
  );
};

export default AllProductsMixed;
