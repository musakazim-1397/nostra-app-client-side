import React from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import HeroImages from "../Components/AllProductsPageComponents/HeroImages/HeroImages";
import NewArrivals from "../Components/AllProductsPageComponents/NewArrivals/NewArrivals";
import MostPopular from "../Components/AllProductsPageComponents/MostPopular/MostPopular";
import AllProductsMixed from "../Components/AllProductsPageComponents/AllProductsMixed/AllProductMixed";
import Footer from "../Components/Footer/Footer";
import { useSelector } from "react-redux";

const AllProducts = () => {
    const reduxState = useSelector((state) => state);
    console.log(reduxState.products)
  return (
    <div>
      <NavigationBar />
      <HeroImages />
      <NewArrivals />
        <MostPopular />
        <AllProductsMixed />
      <Footer />
    </div>
  );
};

export default AllProducts;
