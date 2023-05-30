import classes from "./UserExperience.module.css";
import React from "react";
import { CiDollar } from "react-icons/ci";
import { BsEmojiSmile } from "react-icons/bs";
import { GiNewShoot } from "react-icons/gi";
import { FaShippingFast } from "react-icons/fa";

const UserExperience = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topSection}>
        <span style={{maxWidth:'21rem', fontSize:'2rem'}}>We provide best customer experiences</span>
        <div className={classes.topRightSection}>
            <div className={classes.verticalLine}/>
          <span style={{fontSize:'10px', color:'gray'}}>We ensure our customers have the best shopping experience</span>
        </div>
      </div>
      <div className={classes.bottomSection}>
        <div className={classes.originalProducts}>
          <div className={classes.originalProductsIcon}>
            <CiDollar />
          </div>
          <span className={classes.originalProductsHeading}>
            Original Products
          </span>
          <span className={classes.originalProductsPara}>
            We provide money back guarantee if the products are not original
          </span>
        </div>
        <div className={classes.statisfactionGuaranteed}>
          <div className={classes.originalProductsIcon}>
            <BsEmojiSmile />
          </div>
          <span className={classes.originalProductsHeading}>
            Satisfaction Guanranteed
          </span>
          <span className={classes.originalProductsPara}>
            Exchange or return your money back if you are not satisfied with the
            product
          </span>
        </div>
        <div className={classes.newArrivals}>
          <div className={classes.originalProductsIcon}>
            <GiNewShoot />
          </div>
          <span className={classes.originalProductsHeading}>
            New Arrivals Everyday
          </span>
          <span className={classes.originalProductsPara}>
            We update our products everyday so that you can get the latest
          </span>
        </div>
        <div className={classes.fastDelivery}>
        <div className={classes.originalProductsIcon}>
            <FaShippingFast />
          </div>
          <span className={classes.originalProductsHeading}>
            Fast &#38; Free Delivery
          </span>
          <span className={classes.originalProductsPara}>
            We provide fast and free delivery to our customers
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserExperience;
