import classes from './BookModal.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export const BookModal = (props) => {
  const toggleState = () => {
    props.setState(!props.state);
  };

  return (
    <div className={classes.modal}>
      <div className={classes.overlay} onClick={toggleState}></div>
      <div className={classes['modal-content']}>
        <div className={classes['group-div']}>
          <h1>{props.title}</h1>
          <button>
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: '#a30000' }}
              size="3x"
              className={classes['close-button']}
              onClick={toggleState}
            />
          </button>
        </div>
        <h2>By {props.author}</h2>
        <p>{props.description}</p>
        <p>Price: ${props.price}</p>
        <button className={classes.button}>Add to Cart</button>
      </div>
    </div>
  );
};
