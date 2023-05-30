import classes from "./LimitedOffer.module.css"
import {BsArrowRightShort} from 'react-icons/bs';

const LimitedOffer = () => {
  return (
    <div className={classes.container}>
        <div className={classes.leftContainer}>
            <img src="/limitedOffer/limited-offer.jpg" className={classes.img} />
        </div>
        <div className={classes.rightContainer}>
            <span className={classes.topHeading}>LIMITED OFFER</span>
            <span className={classes.specailOffer}>35% off only this friday and get special gift</span>
            <button className={classes.button}>Grab it now  <BsArrowRightShort size={20}/></button>
        </div>
    </div>
  )
}

export default LimitedOffer