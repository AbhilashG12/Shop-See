import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import './/display.css'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='display'>
        <div className="left">
            <div className="imglist">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="displayimg">
                <img className='display-main' src={product.image} alt="" />
            </div>
        </div>
        <div className="right">
            <h1>{product.name}</h1>
            <div className="right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>

            </div>
            <div className="right-prices">
                <div className="oldprice">${product.old_price}</div>
                <div className="newprice">${product.new_price}</div>
            </div>
            <div className="descript">
                A lightweight knitted , pullover shirt , close-fitting and with a round neckline and short sleeves , worn as an undershirt o outer garment. 
            </div>
            <div className="displaysize">
                <h1>Select Size</h1>
                <div className="right-size">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>(addToCart(product.id))}>Add To Cart</button>
            <p className='productdisplay-right'><span>Category : </span>Women , Tshirts , Crop Tops</p>
            <p className='productdisplay-right'><span>Tag : </span>Modern , Latest</p>
        </div>
      
    </div>
  )
}

export default ProductDisplay
