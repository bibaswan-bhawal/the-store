export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisiting = cartItems.find(CartItem => CartItem.id === cartItemToAdd.id);

    if (exisiting) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }]
}