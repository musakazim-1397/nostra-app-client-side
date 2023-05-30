import { Link } from "react-router-dom";
import classes from "./CurratedPicks.module.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";

const CurratedPicks = () => {
  const [curatedPicks1, setCuratedPicks1] = useState();
  const [curatedPicks2, setCuratedPicks2] = useState();
  const [curatedPicks3, setCuratedPicks3] = useState();
  const [curatedPicks4, setCuratedPicks4] = useState();
  useEffect(() => {
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/Black Coat")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCuratedPicks1(data[0].imageUrls[0]);
      });
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/Tuxedo")
      .then((res) => res.json())
      .then((data) => {
        setCuratedPicks2(data[0].imageUrls[0]);
      })
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/women sweater")
      .then((res) => res.json())
      .then((data) => {
        setCuratedPicks3(data[0].imageUrls[0]);
      })
    fetch("https://nostra-app-server-side.onrender.com/get-product-by-name/casual wear")
      .then((res) => res.json())
      .then((data) => {
        setCuratedPicks4(data[0].imageUrls[0]);
      })

  }, []);
  console.log(curatedPicks1, curatedPicks2, curatedPicks3, curatedPicks4);
  return (
    <div className={classes.container}>
        <div className={classes.topLine}>
        <span className={classes.heading}>Currated Picks</span>
        <div style={{width:'10px',height:'10px'}}/>
        </div>
    <div className={classes.linksContainer}>
      <Link to="/all-products" className={classes.link}>
        <img src={curatedPicks1} className={classes.img} />
        <button className={classes.button}>
          Best Sellers <BsArrowRightShort size={20} />
        </button>
      </Link>
      <Link to="/all-products" className={classes.link}>
        <img src={curatedPicks2} className={classes.img} />
        <button className={classes.button}>
          Shop Men <BsArrowRightShort size={20} />
        </button>
      </Link>
      <Link to="/all-products" className={classes.link}>
        <img src={curatedPicks3} className={classes.img} />
        <button className={classes.button}>
          Shop Women <BsArrowRightShort size={20} />
        </button>
      </Link>
      <Link to="/all-products" className={classes.link}>
        <img src={curatedPicks4} className={classes.img} />
        <button className={classes.button}>
          Shop Casual <BsArrowRightShort size={20} />
        </button>
      </Link>
    </div>
    </div>
  );
};

export default CurratedPicks;
