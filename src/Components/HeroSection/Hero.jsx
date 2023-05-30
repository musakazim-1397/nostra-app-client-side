import { useState } from 'react';
import classes from './Hero.module.css';
import {BsArrowRightShort} from 'react-icons/bs';
import {IoIosArrowForward} from 'react-icons/io';
import {IoIosArrowBack} from 'react-icons/io';

const Hero = () => {
    const [currentImg, setCurrentImg] = useState(1);
    const forwardImageHandler = () => {
        if(currentImg === 5) {
            setCurrentImg(1);
        } else {
            setCurrentImg(currentImg + 1);
        }
    }
    const backwardImageHandler = () => {
        if(currentImg === 1) {
            setCurrentImg(5);
        } else {
            setCurrentImg(currentImg - 1);
        }
    }
  return (
    <div className={classes.container}>
        <div className={classes.imgContainer}>
            <img src={`/heroImages/img-${currentImg}.jpg`} />
            <div className={classes.imgText}>
                <span className={classes.heroMainText}>Level up your style with our summer collections</span>
                <button className={classes.shopNowBtn}>Shop Now <BsArrowRightShort size={20}/></button>
            </div>
            <div className={classes.changeImgBtns}>
                <IoIosArrowBack color={currentImg===1?"gray":'black'} size={20} className={classes.changeImgBtn} onClick={backwardImageHandler}/>
                <IoIosArrowForward color={currentImg===5?"gray":'black'} size={20} className={classes.changeImgBtn} onClick={forwardImageHandler}/>
            </div>
        </div>
    </div>
  )
}

export default Hero