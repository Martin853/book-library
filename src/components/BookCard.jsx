import classes from './BookCard.module.css';

export const BookCard = (props) => {
  return (
    <div className={classes.div}>
      <h1>{props.title}</h1>
      <button>More</button>
    </div>
  );
};
