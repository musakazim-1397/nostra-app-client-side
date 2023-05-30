import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Authentication from "./Pages/Authentication";
import AddProduct from "./Pages/AddProduct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { productsActions, userActions } from "./store/store";
import AllProducts from "./Pages/AllProducts";
import MyProducts from "./Pages/MyProductsPage";
import ProductDetail from "./Pages/ProductDetail";
import EditProduct from "./Pages/EditPage";
import MyOrders from "./Pages/MyOrders";



function App() {
  const dispatch = useDispatch();
  const reduxState = useSelector((state) => state);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(userActions.login(user));
    }

    const products = reduxState.products;
    if (products.length === 0) {
    fetch('https://nostra-app-server-side.onrender.com/get-all-products').then(res => res.json()).then(data => {
      dispatch(productsActions.addProduct(data));
      // console.log(data);
    })
    }
  }, []);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Authentication />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/all-products" element={<AllProducts/>} />
        <Route path="/my-products" element={<MyProducts/>} />
        <Route path="/product-detail/:id" element={<ProductDetail/>} />
        <Route path='/edit-product/:id' element={<EditProduct/>} />
        <Route path="/my-orders" element={<MyOrders/>} />
      </Routes>
    </div>
  );
}

export default App;
