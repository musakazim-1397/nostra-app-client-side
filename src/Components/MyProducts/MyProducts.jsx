import { useEffect, useState } from "react";
import classes from "./MyProducts.module.css";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";
import { userActions } from "../../store/store";

const MyProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://nostra-app-server-side.onrender.com/get-user-products/${reduxState.user.id}`)
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
        console.log(data);
      });
  }, [reduxState.user]);

  const deleteProductHandler = (event,id) => {
    event.preventDefault();
    fetch(`https://nostra-app-server-side.onrender.com/delete-product/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: reduxState.user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        fetch(`https://nostra-app-server-side.onrender.com/get-user-products/${reduxState.user.id}`)
          .then((res) => res.json())
          .then((data) => {
            setAllProducts(data);
            dispatch(userActions.addProduct(data));
            console.log(data);
          });
      });
  };

  return (
    <div className={classes.container}>
      <div id="new-arrivals" className={classes.topHeadingContainer}>
        <h1 className={classes.topHeading}>My Products</h1>
        <span className={classes.topPara}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </span>
      </div>
      <div className={classes.newArrivalsContainer}>
        {allProducts &&
          allProducts.map((item, index) => {
            return (
              <Link
                to={`/product-detail/${item._id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <div key={index} className={classes.productContainer}>
                  <div className={classes.productImageContainer}>
                    <Link
                      to={`/edit-product/${item._id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <div className={classes.editIcon}>
                        <CiEdit size={15} />
                        <span style={{ fontSize: "11px", fontWeight: "500" }}>
                          edit
                        </span>
                      </div>
                    </Link>
                    <img
                      className={classes.productImage}
                      src={item.imageUrls[0]}
                      alt="product"
                    />
                    <div
                      className={classes.deleteIcon}
                      style={{ zIndex: "10" }}
                      onClick={(event)=> deleteProductHandler(event, item._id)}
                    >
                      <AiTwotoneDelete color="#ad0a0a" size={15} />
                      <span style={{ fontSize: "11px", fontWeight: "500" }}>
                        delete
                      </span>
                    </div>
                  </div>
                  <div className={classes.productDetailAndCartContainer}>
                    <div className={classes.productDetailsContainer}>
                      <span className={classes.productName}>{item.name}</span>
                      <span className={classes.productPrice}>
                        ${item.price}
                      </span>
                    </div>
                    <div className={classes.addToCartContainer}>
                      <AiOutlineShoppingCart
                        className={classes.cartIcon}
                        size={20}
                      />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MyProducts;
