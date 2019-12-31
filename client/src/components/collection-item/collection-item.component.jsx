import React from 'react';
import { connect } from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = props => {
  const { addItem } = props;
  const { name, price, imageUrl } = props.item;

  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>${price}</span>
      </div>
      <CustomButton inverted onClick={() => addItem(props.item)}>
        Add to Cart
      </CustomButton>
    </div>
  );
};

const mapDisptachToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDisptachToProps)(CollectionItem);
