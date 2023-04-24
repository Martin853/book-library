import React, { createContext, useState } from 'react';

export const ShopContext = createContext(null);

let cart = {
  nAYBEAAAQBAJ: 0,
  CssmCwAAQBAJ: 0,
  '85-KEAAAQBAJ': 0,
  wmrqaYNQ79AC: 0,
  xptAtjb1a38C: 0,
  QHR9EAAAQBAJ: 0,
  MZyXEAAAQBAJ: 0,
  ISOvEAAAQBAJ: 0,
  ulqIEAAAQBAJ: 0,
  '-_UNV7y3nJIC': 0,
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(cart);

  const addToCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
  };

  const removeFromCart = (itemID) => {
    setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };

  console.log(cartItems);

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
