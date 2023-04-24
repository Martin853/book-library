import classes from './ShoppingCartContainer.module.css';
import { CartItem } from './CartItem';
import { TotalSection } from '../components/TotalSection';
import { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

export const ShoppingCartContainer = () => {
  const { cartItems } = useContext(ShopContext);
  const items = [{}];

  return (
    <div className={classes.container}>
      <div className={classes['cart-item-container']}>
        {items.map((item) => {
          if (cartItems[item.id] !== 0) {
            return (
              <CartItem
                title={item.title}
                price={item.price}
                quantity={item.quantity}
                key={item.id}
              />
            );
          }
        })}
        <TotalSection />
      </div>
    </div>
  );
};
