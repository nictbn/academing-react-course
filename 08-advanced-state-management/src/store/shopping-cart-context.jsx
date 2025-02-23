import { createContext } from 'react';

export const CartContext = createContext({
    items: [], // declaring this also helps with autocomplete, even though the value on the Provider is the default value, not this one
    addItemToCart: () => {}, // same as above
    updateItemQUantity: () => {}
});