import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

export const Navbar = () => {
  return (
    <nav className={classes.nav}>
      <h1>Book Library</h1>
      <div className={classes['search-div']}>
        <input type="text" placeholder="Search for a book..." />
      </div>
      <div className={classes.action}>
        <Link className={classes.link} to="/">
          Books
        </Link>
        <Link
          style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
          className={classes.link}
          to="/shopping-cart"
        >
          <FontAwesomeIcon
            className={classes['fa-icon']}
            icon={faCartShopping}
            style={{
              color: 'white',
            }}
          />
          Shopping Cart
        </Link>
      </div>
    </nav>
  );
};
