import classes from './ShoppingCart.module.css';
import { EmptyCart } from '../components/EmptyCart';

export const ShoppingCart = () => {
  return (
    <div className={classes.container}>
      <EmptyCart />
    </div>
  );
};
