import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FiSearch } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiOutlineUser } from "react-icons/hi";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userActions } from "../../store/store";
import { RxCross2 } from "react-icons/rx";

const NavigationBar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [showSignupSection, setShowSignupSection] = useState(() => {
    if (localStorage.getItem("user")) {
      return false;
    } else {
      return true;
    }
  });
  const [user, setUser] = useState(null);
  const reduxState = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(reduxState);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    dispatch(userActions.logout());
    window.location.reload();
  };

  useEffect(() => {
    if (!reduxState.user.email) {
      return;
    } else {
      const currentUser = { ...reduxState.user };
      setUser(currentUser);
    }
  }, [reduxState.user]);
  return (
    <div className={classes.container}>
      {showSignupSection && (
        <div className={classes.signUpSection}>
          <span>
            Sign Up and <strong>GET 20% OFF</strong> for your first order.{" "}
            <Link to={"/login"} className={classes.signupLink}>
              Sign up Now
            </Link>
          </span>
          <div className={classes.crossIconContainer}>
            <RxCross2
              className={classes.crossIcon}
              size={20}
              onClick={() => setShowSignupSection(false)}
            />
          </div>
        </div>
      )}
      <div className={classes.navigationSection}>
        <div className={classes.logoSection}>
          <Link className={classes.navigationLink} to="/">
            NOSTRA
          </Link>
        </div>
        <div className={classes.navigationLinks}>
          <Link className={classes.navigationLink} to="/all-products">
            Shop
          </Link>
          <Link className={classes.navigationLink} to="/">
            Most wanted
          </Link>
          <Link className={classes.navigationLink} to="/">
            New Arrival
          </Link>
          <Link className={classes.navigationLink} to="/">
            Brands
          </Link>
        </div>
        <div className={classes.searchSection}>
          <div className={classes.SearchContainer}>
            <input
              type="text"
              placeholder="Search"
              className={classes.inputElement}
            />
            <FiSearch className={classes.searchIcon} />
          </div>
          <div className={classes.cartContainer}>
            <AiOutlineShoppingCart className={classes.cartIcon} size={20} />
          </div>
          <div className={classes.userContainer} style={{ cursor: "pointer" }}>
            {user ? (
              <img
                src={`${user.picture}`}
                className={classes.userImage}
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
              />
            ) : (
              <HiOutlineUser
                className={classes.userIcon}
                size={20}
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                style={{ cursor: "pointer" }}
              />
            )}
            {isUserDropdownOpen && (
              <div className={classes.userDropdown}>
                {user ? (
                  <button
                    className={`${classes.googleLoginContainer} ${classes.logoutButton}`}
                    onClick={logoutHandler}
                  >
                    Logout
                  </button>
                ) : (
                  <Link
                    onClick={() => setIsUserDropdownOpen(false)}
                    to={"/login"}
                    className={classes.googleLoginContainer}
                  >
                    Login/Signup
                  </Link>
                )}
                <Link
                  to={"/my-products"}
                  onClick={() => setIsUserDropdownOpen(false)}
                  className={classes.myProducts}
                >
                  My Products
                </Link>
                <Link
                  to={"/my-orders"}
                  onClick={() => setIsUserDropdownOpen(false)}
                  className={classes.myOrders}
                >
                  My Orders
                </Link>
                <Link
                  className={classes.addProduct}
                  onClick={() => setIsUserDropdownOpen(false)}
                  to="/add-product"
                >
                  Add Product
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
