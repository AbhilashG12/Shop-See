import React, { useContext } from 'react'
import './/CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'


const CartItems = () => {
    const {getTotalCartAmount,all_product,CartItems,removeFromCart} = useContext(ShopContext)

  return (
    <div className='cartitems'>
      <div className="format">
        <p>Product</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e)=>{
        if(CartItems[e.id]>0){
          return <div>
          <div className="classformat">
              <img src={e.image} alt="" className='producticon' />
              <p>{e.image}</p>
              <p>${e.new_price}</p>
              <button className='quantity'>{CartItems[e.id]}</button>
              <p>${e.new_price*CartItems[e.id]}</p>
              <img className='remove' src={remove_icon} onClick={()=>{removeFromCart()}} alt="" />
          </div>
          <hr />
        </div>
        }
        return null;
      })}
      <div className="down">
        <div className="total">
          <h1>Cart Total</h1>
          <div>
            <div className="totitem">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="totitem">
              <p>Shipping Free</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="totitem">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>
          <button>Proceed to checkout</button>
        </div>
        <div className="promo">
          <p>If you have any promo code , please enter it here</p>
          <div className="promobox">
            <input type="text" placeholder='enter your promocode' />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItems
