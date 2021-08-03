export const addItemToCart = (cartItems, cartItemToAdd) => {
    const exisiting = cartItems.find(CartItem => CartItem.id === cartItemToAdd.id);

    if (exisiting) {
        return cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem);
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const exisitingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id);

    if (exisitingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    } 
        
    return cartItems.map(cartItem => cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem);
}