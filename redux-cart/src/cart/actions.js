export const addToCart = id => ({
  type: 'ADD_TO_CART',
  payload: id,
});

export const reduceQuantityInCart = id => ({
  type: 'REDUCE_QUANTITY_IN_CART',
  payload: id,
});

export const removeFromCart = id => ({
  type: 'REMOVE_FROM_CART',
  payload: id,
});


