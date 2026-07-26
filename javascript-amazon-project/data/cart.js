export const cart = [];

export function addToCart(productId){
  let existingItem;

  cart.forEach((cartItem) => {
    if (cartItem.productId == productId) {
        existingItem = cartItem;
      } 
  })

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({productId: productId, quantity: 1})
  }
}