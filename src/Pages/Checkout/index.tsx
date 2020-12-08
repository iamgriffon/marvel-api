import React, { useContext, useEffect, useState } from 'react';
import './styles.scss';
import { GlobalCartContext, LoadingContext } from '../../Utils/store';
import CheckoutItem from '../../Components/CheckoutItem';
import { CardItem } from '../../Utils/types';
import { Input, InputLabel } from '@material-ui/core';
import Loader from '../../Components/Loader';


const CheckoutPage = () => {

  const [total, setTotal] = useState(0);
  const [discounted, setDiscount] = useState(0);
  const [coupon, setCoupon] = useState('');

  const cart = useContext(GlobalCartContext);
  const loading = useContext(LoadingContext);

  const getTotalPrice = () => {
    let total: number = 0;
    cart.items.forEach((item: CardItem) => {
      total = item.price + total;
    })
    setTotal(total);
    setDiscount(total);
  }

  const discount = () => {
    let aux: number;
    aux = Number(total.toFixed(2))
    if (coupon === 'discount') {
      setDiscount(aux * 0.9)
    } else {
      setDiscount(aux);
    };
  }

  useEffect(() => {
  },[]);

  useEffect(() => {
    loading.toggle();
    getTotalPrice();
    loading.toggle();
  }, [cart.items])


  return (
    
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="checkout-item-styles">
          <span>Name</span>
        </div>
        <div className="checkout-item-styles">
          <span>Price</span>
        </div>
        <div className="checkout-item-styles">
          <span>Description</span>
        </div>
      </div>
      {
        cart.items.length ? (
          cart.items.map((item: CardItem, id) => (
            <CheckoutItem key={id} data={item} />
          ))
        ) : (<p>Your basket is empty, go get some stuff! :)</p>)

      }
      {
      loading.active && (<Loader />)
      } 

      <h2 className="checkout-total"> Total: ${discounted}</h2><br />
      <InputLabel>Got a discount coupon? claim it here! use the 'discount' coupon to get 10% OFF NOW! </InputLabel>
      <Input value={coupon} onChange={(event) => setCoupon(event.target.value)} onBlur={() => discount()} />
    </div>
   
  )
};

export default CheckoutPage;