import { useState } from 'react';
import classes from './BookCard.module.css';
import { BookModal } from './BookModal';

export const BookCard = (props) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <div className={classes.div}>
        <img src={props.image} />
        <h1>{props.title}</h1>
        <button onClick={toggleModal}>More</button>
      </div>

      {modal && (
        <BookModal
          title={props.title}
          author={props.author}
          description={props.description}
          price={props.price}
          state={modal}
          setState={setModal}
          id={props.id}
        />
      )}
    </>
  );
};
