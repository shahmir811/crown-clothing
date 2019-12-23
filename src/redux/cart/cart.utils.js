export const addItemToCart = (cartItems, newCartItemToAdd) => {
  // Check whether newCartItemToAdd is already in our array
  const existingCartItem = cartItems.find(
    item => item.id === newCartItemToAdd.id
  );

  if (existingCartItem) {
    // map function below returns with new array

    return cartItems.map(cartItem => {
      return cartItem.id === newCartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...newCartItemToAdd, quantity: 1 }];
};
