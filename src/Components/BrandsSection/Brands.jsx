import classes from './Brands.module.css';

const Brands = () => {
  return (
    <div className={classes.container}>
        <span className={classes.brandsHeading}>Brands</span>
        <div className={classes.brands}>
            <img src='/brandImages/chanel.png' alt='chanel' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/CK.png' alt='CK' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/GUESS.png' alt='guess' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/Gucci.png' alt='gucci' style={{width:"60px", height:'60px'}}/>
            <img src='/brandImages/D&G.png' alt='D&G' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/Adidas.png' alt='Adidas' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/Levis.png' alt='Levis' style={{width:"50px", height:'50px'}}/>
            <img src='/brandImages/Starbucks.png' alt='Nike' style={{width:"60px", height:'60px', filter:"grayscale(100%)"}}/>
        </div>
    </div>
  )
}

export default Brands