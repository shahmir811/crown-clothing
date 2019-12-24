import React from 'react';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';

import './checkout-item.styles.scss';

// import { selectCartItems } from '../../redux/cart/cart.selectors';

const CheckoutItem = props => {
  const { name, imageUrl, price, quantity } = props.cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{quantity}</span>
      <span className='price'>{price}</span>
      <span className='remove-button'>&#10005;</span>
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   cartItems: selectCartItems
// });

// export default connect(mapStateToProps)(CheckoutItem);
export default CheckoutItem;
