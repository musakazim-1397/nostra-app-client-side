import { Link } from "react-router-dom";
import classes from "./Footer.module.css";
import { ReactComponent as MasterSvg } from "./paymentMethods/mastercard.svg";
import { ReactComponent as VisaSvg } from "./paymentMethods/visa-credit-card.svg";
import { ReactComponent as StripeSvg } from "./paymentMethods/stripe.svg";

const Footer = () => {
  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.leftContainer}>
          <span className={classes.logoContainer}>Nostra</span>
          <span className={classes.leftPara}>
            Specializes in providing high quality, stylish products for your
            wardrobe
          </span>
        </div>
        <div className={classes.rightContainer}>
          <div className={classes.linksContainer}>
            <div className={classes.link}>
              <span className={classes.heading}>Shop</span>
              <Link to="/" className={classes.linkItem}>
                All Collection
              </Link>
              <Link to="/" className={classes.linkItem}>
                Winter edition
              </Link>
              <Link to={"/"} className={classes.linkItem}>
                Best Seller
              </Link>
            </div>
            <div className={classes.link}>
              <span className={classes.heading}>Company</span>
              <Link to="/" className={classes.linkItem}>
                About us
              </Link>
              <Link to="/" className={classes.linkItem}>
                Contact us
              </Link>
              <Link to={"/"} className={classes.linkItem}>
                Affiliates
              </Link>
            </div>
            <div className={classes.link}>
              <span className={classes.heading}>Support</span>
              <Link to="/" className={classes.linkItem}>
                FAQs
              </Link>
              <Link to="/" className={classes.linkItem}>
                Cookie policy
              </Link>
              <Link to={"/"} className={classes.linkItem}>
                Term of use
              </Link>
            </div>
          </div>
          <div className={classes.paymentContainer}>
            <span className={classes.heading}>Payment Methods</span>
            <div className={classes.paymentIconsContainer}>
              <MasterSvg className={classes.paymentIcon} />
              <VisaSvg className={classes.paymentIcon} />
              <StripeSvg className={classes.paymentIcon} />
            </div>
          </div>
        </div>
      </div>
        <div className={classes.bottomContainer}>
            <span className={classes.bottomPara}>&#169; 2021 Nostra. All Rights Reserved</span>
        </div>
    </div>
  );
};

export default Footer;
