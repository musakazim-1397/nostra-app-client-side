import { Fragment } from "react";
import NavigationBar from "../Components/NavigationBar/NavigationBar";
import Hero from "../Components/HeroSection/Hero";
import Brands from "../Components/BrandsSection/Brands";
import UserExperience from "../Components/UserExperience/UserExperience";
import CurratedPicks from "../Components/CurratedPicks/CurratedPicks";
import FeaturedProducts from "../Components/FeaturedProducts/FeaturedProducts";
import LimitedOffer from "../Components/LimitedOffer/LimitedOffer";
import Subscribe from "../Components/Subscribe/Subscribe";
import Footer from "../Components/Footer/Footer";



const Home = () => {
  
  return (
    <Fragment>
      <NavigationBar />
      <Hero />
      <Brands />
      <UserExperience />
      <CurratedPicks/>
      <FeaturedProducts/>
      <LimitedOffer/>
      <Subscribe/>
      <Footer/>
    </Fragment>
  );
};

export default Home;
