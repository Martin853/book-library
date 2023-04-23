import classes from './ShoppingCartContainer.module.css';
import { CartItem } from './CartItem';
import { TotalSection } from '../components/TotalSection';

export const ShoppingCartContainer = (props) => {
  const cartItems = props.cartItems;

  return (
    <div className={classes.container}>
      <div className={classes['cart-item-container']}>
        {cartItems.map((item) => (
          <CartItem
            title={item.title}
            price={item.price}
            quantity={item.quantity}
          />
        ))}
        <TotalSection />
      </div>
    </div>
  );
};
