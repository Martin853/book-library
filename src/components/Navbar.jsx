import classes from './Navbar.module.css';
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
        <button>Books</button>
        <button style={{ display: 'flex', gap: '10px' }}>
          <FontAwesomeIcon
            className={classes['fa-icon']}
            icon={faCartShopping}
            style={{
              color: 'white',
            }}
          />
          Shopping Cart
        </button>
      </div>
    </nav>
  );
};
