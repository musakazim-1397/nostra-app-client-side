import { useSelector } from "react-redux";
import classes from "./AddProduct.module.css";
import { Link, useNavigate } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { useEffect, useRef, useState } from "react";
import { toast } from 'react-toastify';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AddProduct = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(true);
  const navigation = useNavigate();
  useEffect(() => {
    const currentUser = localStorage.getItem("user");
    if (!currentUser) {
      navigation("/login");
    }
  }, []);

  const reduxState = useSelector((state) => state);
  const { user } = reduxState;
  console.log(user);

  const fileInputRef1 = useRef();
  const fileInputRef2 = useRef();
  const fileInputRef3 = useRef();
  const fileInputRef4 = useRef();

  const productNameRef = useRef();
    const productPriceRef = useRef();
    const productDescriptionRef = useRef();
    const productCategoryRef = useRef();
    const productQuantityRef = useRef();
    const productDateRef = useRef();


  const [inputImage1, setInputImage1] = useState(null);
  const [inputImage1Preview, setInputImage1Preview] = useState(null); // for preview
  const [inputImage2, setInputImage2] = useState(null);
  const [inputImage2Preview, setInputImage2Preview] = useState(null); // for preview
  const [inputImage3, setInputImage3] = useState(null);
  const [inputImage3Preview, setInputImage3Preview] = useState(null); // for preview
  const [inputImage4, setInputImage4] = useState(null);
  const [inputImage4Preview, setInputImage4Preview] = useState(null); // for preview


  const addProductHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", productNameRef.current.value);
    formData.append("price", productPriceRef.current.value);
    formData.append("description", productDescriptionRef.current.value);
    formData.append("category", productCategoryRef.current.value);
    formData.append("quantity", productQuantityRef.current.value);
    formData.append("date", productDateRef.current.value);
    formData.append("images", inputImage1);
    formData.append("images", inputImage2);
    formData.append("images", inputImage3);
    formData.append("images", inputImage4);
    formData.append("user", user.id);

    fetch("https://nostra-app-server-side.onrender.com/add-product", {
        method: "POST",
        body: formData,
        })
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
        toast.success("Product added successfully");
        productNameRef.current.value = "";
        productPriceRef.current.value = "";
        productDescriptionRef.current.value = "";
        productCategoryRef.current.value = "";
        productQuantityRef.current.value = "";
        productDateRef.current.value = "";
        setInputImage1(null);
        setInputImage2(null);
        setInputImage3(null);
        setInputImage4(null);
        setInputImage1Preview(null);
        setInputImage2Preview(null);
        setInputImage3Preview(null);
        setInputImage4Preview(null);

        })
        .catch((err) => {
        console.log(err);
        toast.error("Something went wrong while adding product");
        productNameRef.current.value = "";
        productPriceRef.current.value = "";
        productDescriptionRef.current.value = "";
        productCategoryRef.current.value = "";
        productQuantityRef.current.value = "";
        productDateRef.current.value = "";
        setInputImage1(null);
        setInputImage2(null);
        setInputImage3(null);
        setInputImage4(null);
        setInputImage1Preview(null);
        setInputImage2Preview(null);
        setInputImage3Preview(null);
        setInputImage4Preview(null);
        });
    };



  useEffect(() => {
    if (inputImage1) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage1Preview(reader.result);
      };
      reader.readAsDataURL(inputImage1);
    }
    if (inputImage2) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage2Preview(reader.result);
      };
      reader.readAsDataURL(inputImage2);
    }
    if (inputImage3) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage3Preview(reader.result);
      };
      reader.readAsDataURL(inputImage3);
    }
    if (inputImage4) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setInputImage4Preview(reader.result);
      };
      reader.readAsDataURL(inputImage4);
    }
  }, [inputImage1, inputImage2, inputImage3, inputImage4]);

  const handleImage1 = (e) => {
    const [file] = e.target.files;
    if (file) {
      setInputImage1(file);
    }
  };
  const handleImage2 = (e) => {
    const [file] = e.target.files;
    if (file) {
      setInputImage2(file);
    }
  };
  const handleImage3 = (e) => {
    const [file] = e.target.files;
    if (file) {
      setInputImage3(file);
    }
  };
  const handleImage4 = (e) => {
    const [file] = e.target.files;
    if (file) {
      setInputImage4(file);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.leftSection}>
        <div
          className={classes.userContainer}
          onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
          style={{ cursor: "pointer" }}
        >
          <img src={`${user.picture}`} className={classes.userImage} />
          <div className={classes.userNameContainer}>
            <span className={classes.userName}>{user.name}</span>
            <span className={classes.userEmail}>{user.email}</span>
            <div className={classes.arrowDown}>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
        {isUserDropdownOpen && (
          <>
            {" "}
            <span className={classes.dashboard}>Dashboard</span>
            <div className={classes.linksContainer}>
              <Link to="/" className={classes.link}>
                Home
              </Link>
              <Link to="/all-products" className={classes.link}>
                All Products
              </Link>

              <Link to="/my-products" className={classes.link}>
                My Products
              </Link>
              <Link to="/my-orders" className={classes.link}>
                My Orders
              </Link>
              <Link to="/my-cart" className={classes.link}>
                My Cart
              </Link>
              <Link to="/my-wishlist" className={classes.link}>
                My Wishlist
              </Link>

              <Link to="/my-addresses" className={classes.link}>
                My Addresses
              </Link>

              <Link to="/my-reviews" className={classes.link}>
                My Reviews
              </Link>
            </div>
          </>
        )}
      </div>
      <div className={classes.rightSection}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
        <div className={classes.topSection}>
          <span className={classes.mainHeading}>Add Product</span>
          <span className={classes.mainPara}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.{" "}
          </span>
        </div>
        <div className={classes.bottomSection}>
          <form onSubmit={addProductHandler} className={classes.formContainer}>
            <div className={classes.formLeftContainer}>
              <label className={classes.label}>Product Name</label>
              <input ref={productNameRef} type="text" className={classes.input} />
              <label className={classes.label}>Product Price</label>
              <input ref={productPriceRef} type="text" className={classes.input} />
              <label className={classes.label}>Product Description</label>
              <textarea ref={productDescriptionRef} className={classes.textArea}></textarea>
              <label className={classes.label}>Product Category</label>
              <select defaultValue={"fashion"} className={classes.select} ref={productCategoryRef}>
                <option value="fashion">Fashion</option>
                <option value="electronics">Electronics</option>
                <option value="grocery">Grocery</option>
                <option value="appliances">Appliances</option>
                <option value="furniture">Furniture</option>
                <option value="beauty">Beauty</option>
                <option value="toys">Toys</option>
                <option value="books">Books</option>
                <option value="sports">Sports</option>
                <option value="stationary">Stationary</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className={classes.formRightContainer}>
              <label className={classes.label}>Product Images</label>

              <div className={classes.image1And2Container}>
                <div className={classes.image1Container}>
                  <div className={classes.imageContainer}>
                    {inputImage1Preview ? (
                      <img src={inputImage1Preview} className={classes.image} />
                    ) : (
                      <div
                        className={classes.imageAlt}
                        onClick={() => fileInputRef1.current.click()}
                      >
                        <span className={classes.imageAltText}>
                          click here to add image
                        </span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef1}
                    style={{ display: "none" }}
                    onChange={handleImage1}
                  />
                </div>

                <div className={classes.image2Container}>
                  <div className={classes.imageContainer}>
                    {inputImage2Preview ? (
                      <img src={inputImage2Preview} className={classes.image} />
                    ) : (
                      <div
                        className={classes.imageAlt}
                        onClick={() => fileInputRef2.current.click()}
                      >
                        <span className={classes.imageAltText}>
                          click here to add image
                        </span>
                      </div>
                    )}
                  </div>
                  <input
                    type="file"
                    ref={fileInputRef2}
                    style={{ display: "none" }}
                    onChange={handleImage2}
                  />
                </div>

                <div className={classes.image3And4Container}>
                  <div className={classes.image3Container}>
                    <div className={classes.imageContainer}>
                      {inputImage3Preview ? (
                        <img
                          src={inputImage3Preview}
                          className={classes.image}
                        />
                      ) : (
                        <div
                          className={classes.imageAlt}
                          onClick={() => fileInputRef3.current.click()}
                        >
                          <span className={classes.imageAltText}>
                            click here to add image
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef3}
                      style={{ display: "none" }}
                      onChange={handleImage3}
                    />
                  </div>
                  <div className={classes.image4Container}>
                    <div className={classes.imageContainer}>
                      {inputImage4Preview ? (
                        <img
                          src={inputImage4Preview}
                          className={classes.image}
                        />
                      ) : (
                        <div
                          className={classes.imageAlt}
                          onClick={() => fileInputRef4.current.click()}
                        >
                          <span className={classes.imageAltText}>
                            click here to add image
                          </span>
                        </div>
                      )}
                    </div>
                    <input
                      type="file"
                      ref={fileInputRef4}
                      style={{ display: "none" }}
                      onChange={handleImage4}
                    />
                  </div>
                </div>
              </div>
              <div className={classes.productDateContainer}>
                <div className={classes.dateContainer}>
                  <label className={classes.label}>Product Date</label>
                  <input type="date" className={classes.dateInputElement} ref={productDateRef}/>
                </div>
                <div className={classes.dateContainer}>
                  <label className={classes.label}>Product Quantity</label>
                  <input
                    type="text"
                    className={classes.productQtyInputElement}
                    ref={productQuantityRef}
                  />
                </div>
              </div>
              <button className={classes.button}>Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
