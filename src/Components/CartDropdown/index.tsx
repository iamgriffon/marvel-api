import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalCartContext } from '../../Utils/store';
import { CardItem } from '../../Utils/types';
import './styles.scss';

const CartDropdown = () => {
  const cart = useContext(GlobalCartContext);

  function clearBasket(){
    cart.clearItem();
  }

  return (
    <div className="dropdown-container">
      <span className='close-button' onClick={() => cart.setHidden()}>x</span>
      <div className="cart-item-container">
        {
          cart.items.length? (
            cart.items.map((item:CardItem, index) => (
              <div className='item-details' key={index}>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
              </div>
            ))
            ) : (
              <Fragment>
                <p>There are no items in your basket :)</p>
              </Fragment>
            )
        }
      </div>
      <button className="cart-button">
        <Link to ='/checkout' className='cart-link' onClick={() => cart.setHidden()}>Checkout</Link>
      </button>
        {  
          cart.items.length? (<button className="cart-button" onClick={() => clearBasket()}>CLEAR</button>) : null
        }
      
    </div>
  )
}

export default CartDropdown;