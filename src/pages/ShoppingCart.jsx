import classes from './ShoppingCart.module.css';
import { EmptyCart } from '../components/EmptyCart';
import { ShoppingCartContainer } from '../components/ShoppingCartContainer';
import { ShopContext } from '../context/ShopContext';
import { useContext } from 'react';

export const ShoppingCart = () => {
  const { cartItems } = useContext(ShopContext);

  const hasItems = Object.values(cartItems).some((value) => value > 0);

  return (
    <div className={classes.container}>
      {hasItems ? <ShoppingCartContainer /> : <EmptyCart />}
    </div>
  );
};
