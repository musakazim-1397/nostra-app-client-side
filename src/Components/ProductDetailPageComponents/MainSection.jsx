import classes from "./MainSection.module.css"

const MainSection = (props) => {
  console.log(props.product)
  return (
    <div className={classes.container}>
      <div className={classes.leftContainer}>
        <div className={classes.productSmallImagesContainer}>
          <img className={classes.productSmallImage} src={props.product.imageUrls[1]} alt="product" />
          <img className={classes.productSmallImage} src={props.product.imageUrls[2]} alt="product" />
          <img className={classes.productSmallImage} src={props.product.imageUrls[3]} alt="product" />
        </div>
        <div className={classes.productBigImageContainer}>
          <img className={classes.productBigImage} src={props.product.imageUrls[0]} alt="product" />
        </div>
      </div>
      <div className={classes.rightContainer}>
        <div className={classes.productNameAndPriceContainer}>
          <span className={classes.productName}>{props.product.name}</span>
          <span className={classes.productAvailability}>Availability(In Stock)</span>
          <span className={classes.productPrice}>${props.product.price}</span>
        </div>
        <div className={classes.productDescriptionContainer}>
          <span className={classes.productDescriptionHeading}>Description</span>
          <span className={classes.productDescription}>{props.product.description}</span>
      </div>
        <div className={classes.productAddToCartContainer}>
          <button className={classes.productAddToCartButton}>Add to Cart</button>
        </div>
        </div>
    </div>
  )
}

export default MainSection