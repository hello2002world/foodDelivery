import React, { useContext} from 'react'
import './cart.css'
import { StoreContext } from '../../Context/StoreContext'

const Cart = () => {
  const {cartItems, food_list, removeFromCart} = useContext(StoreContext);
  return (
    <div className='container cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br/>
        <hr/>
        {food_list.map((item, index)=>{
            if(cartItems[item._id]> 0)
            {
              return(
               <div className=''>
                 <div className='cart-items-title cart-items-item'>
                  <img src={item.image} alt=''/>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price*cartItems[item._id]}</p>
                  <p className='cross' onClick={()=>removeFromCart(item._id)}><i className="fa-solid fa-trash text-danger"></i></p>
                </div>
                <hr/>
               </div>
              )
            }
        })}
      </div>
      <div className="cart-bottom pb-4">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p className='mb-0'>Subtotal</p>
              <p className='mb-0'>{0}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <p className='mb-0'>Delivery Fee</p>
              <p>{2}</p>
            </div>
            <hr/>
            <div className="cart-total-details">
              <b>total</b>
              <b>{0}</b>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cart-promocode">
           <div>
            <p className='mb-0'>If tou have a promo code, Enter it here</p>
           </div>
           <div className="cart-promocode-input">
            <input type='text' placeholder='Promo code'/>
            <button>Submit</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Cart