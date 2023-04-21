import classes from './BookCard.module.css';

export const BookCard = () => {
  return (
    <div className={classes.div}>
      <img src="https://go.trader.ca/wp-content/uploads/2022/02/250X250.png" />
      <h1>Title</h1>
      <button>More</button>
    </div>
  );
};
