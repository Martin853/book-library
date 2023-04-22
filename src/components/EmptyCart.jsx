import { Link } from 'react-router-dom';
import classes from './EmptyCart.module.css';

export const EmptyCart = () => {
  return (
    <div className={classes.div}>
      <h1>You don't have any item in your cart.</h1>
      <Link className={classes.button} to={'/'}>
        Go back shopping
      </Link>
    </div>
  );
};
