import { useState } from 'react';
import classes from './BookCard.module.css';
import { BookModal } from './BookModal';

export const BookCard = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  const randomPrice = () => {
    const min = 10;
    const max = 20;

    return (Math.random() * (max - min) + min).toFixed(2);
  };

  return (
    <>
      <div className={classes.div}>
        <h1>{props.title}</h1>
        <button onClick={toggleModal}>More</button>
      </div>

      {modal && (
        <BookModal
          title={props.title}
          author={props.author}
          description={props.description}
          state={modal}
          setState={setModal}
          price={randomPrice()}
        />
      )}
    </>
  );
};
