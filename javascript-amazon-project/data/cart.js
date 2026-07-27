export const cart = JSON.parse(localStorage.getItem('cart')) || [
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '83d4ca15-0f35-48f5-b7a3-1ea210004f2e',
        quantity: 3
    }
];


function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart))
}


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

  saveToStorage();
}


export function removeFromCart(productId) {
  cart.forEach((cartItem, index) => {
    if (cartItem.productId == productId) {
      cart.splice(index, 1);
    }
  })

  saveToStorage();
}