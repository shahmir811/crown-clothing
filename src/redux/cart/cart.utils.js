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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  // Check if the item is present in cart
  const existingCartItem = cartItems.find(
    item => item.id === cartItemToRemove.id
  );

  // Check and then delete if cart item quantity is equal to one
  if (existingCartItem.quantity === 1) {
    return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
  }

  // we use spread operator below (...cartItem), so that it will return new object and our state gets rerender
  return cartItems.map(cartItem => {
    return cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
