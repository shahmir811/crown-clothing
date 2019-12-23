import { createSelector } from 'reselect';

// 1 - get a slice of REDUX state (like cart object)
const selectItems = state => state.cart; // its an input selector

// 2 - Get cartIems out of card(selectItems) object
// as we use createSelector, so below is a memoized selector
export const selectCartItems = createSelector(
  [selectItems], // first argument is the collection/array of input selectors
  cart => cart.cartItems //second argument is a function that will return the value we want out of this selector
);

// 3 - Calculate the count of cartItems
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (initialValue, cartItems) => initialValue + cartItems.quantity,
      0
    )
);
