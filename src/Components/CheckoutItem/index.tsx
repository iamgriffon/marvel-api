import React from 'react';
import { CheckoutItemProps } from '../../Utils/types';
import './styles.scss';


const CheckoutItem: React.FC<CheckoutItemProps> = ({data}) => {

  return (
    <div className="checkout-item-container">
      <span className="checkout-item-styles">{data.name}</span>
      <span className="checkout-item-styles">$ <b>{data.price}</b></span>
      <span className="checkout-item-styles">{data?.description? (data?.description) : (<b>COMING SOON!</b>)}</span>
    </div>
  )

}

export default CheckoutItem;