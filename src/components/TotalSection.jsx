import classes from './TotalSection.module.css';

export const TotalSection = () => {
  return (
    <div className={classes.div}>
      <h2>Total Price: 20</h2>
      <button className={classes.button}>Purchase</button>
    </div>
  );
};
