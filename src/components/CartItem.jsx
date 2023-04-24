import classes from './CartItem.module.css';

export const CartItem = (props) => {
  return (
    <div className={classes.cart}>
      <h2>{props.title}</h2>
      <h4>Price: {props.price}$</h4>
      <h4>Quantity: {props.quantity}</h4>
      <div className={classes.action}>
        <button className={classes.button}>+</button>
        <button className={classes.button}>-</button>
        <button className={classes['remove-button']}>Remove</button>
      </div>
    </div>
  );
};
