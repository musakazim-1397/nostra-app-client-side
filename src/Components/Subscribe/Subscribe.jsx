import classes from "./Subscribe.module.css";
import { GoMail } from "react-icons/go";

const Subscribe = () => {
  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>
        Subscribe to our newsletter to get updates to our latest collections
      </h1>
      <span className={classes.paraContainer}>
        Get 20% off on your first order when you subscribe to our newsletter
      </span>
      <div className={classes.inputAndButtonContainer}>
        <div className={classes.inputContainer}>
          <input type="text" placeholder="Enter your email" />
          <div className={classes.iconContainer}>
          <GoMail size={20} color="gray" className={classes.icon} />

          </div>
        </div>
        <button className={classes.button}>Subscribe</button>
      </div>
    </div>
  );
};

export default Subscribe;
