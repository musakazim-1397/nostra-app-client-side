import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import NavigationBar from '../Components/NavigationBar/NavigationBar';
import MainSection from '../Components/ProductDetailPageComponents/MainSection';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    let {id} = useParams();
    // console.log(id);
    useEffect(() => {
        fetch(`https://nostra-app-server-side.onrender.com/get-product/${id}`).then(res => res.json()).then(data => {
            setProduct(data);
            console.log(data);
        })
    }, [])
  return (
    <div>
        <NavigationBar />
        {product && <MainSection product={product}/>}
    </div>
  )
}

export default ProductDetail