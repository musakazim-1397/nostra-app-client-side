import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import classes from "./MyOrders.module.css";
import { userActions } from "../store/store";
import { Link } from "react-router-dom";

const MyOrders = () => {
  const reduxState = useSelector((state) => state);
  console.log(reduxState.user);
  const dispatch = useDispatch();
  return (
    <div>
      <NavigationBar />
      {reduxState.user.cart.length === 0 ? (
        <h1 style={{ textAlign: "center" }}>No Orders</h1>
      ) : (
        <div className={classes.myOrdersContainer}>
          {reduxState.user.cart.map((item, index) => {
            return (
              <Link
                to={`/product-detail/${item._id}`}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
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
                      <span className={classes.productPrice}>
                        ${item.price}
                      </span>
                      <span className={classes.productPrice}>
                        Quantity: {item.quantity}
                      </span>
                    </div>
                    <div
                      className={classes.RemoveFromCartContainer}
                      onClick={(e) => {
                        e.preventDefault();
                        dispatch(userActions.removeCart(item));
                      }}
                    >
                      <RxCross2 className={classes.cartIcon} size={20} />
                      <span>Remove</span>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default MyOrders;
