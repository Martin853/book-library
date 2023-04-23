import classes from './ShoppingCart.module.css';
import { EmptyCart } from '../components/EmptyCart';
import { useState } from 'react';
import { ShoppingCartContainer } from '../components/ShoppingCartContainer';

export const ShoppingCart = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className={classes.container}>
      {cartItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <ShoppingCartContainer cartItems={cartItems} />
      )}
    </div>
  );
};
