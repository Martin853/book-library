import { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';

export const BooksSection = (props) => {
  const [booksData, setBooksData] = useState([]);
  const searchTerm = props.searchQuery;

  useEffect(() => {
    fetch(
      'https://www.googleapis.com/books/v1/volumes?q=subject:fiction&maxResults=20&country=US&key=AIzaSyCOdBW17XswV2lIzACKPq0HCsyaXT7QhWI'
    )
      .then((res) => res.json())
      .then((data) => {
        const books = data.items.filter(
          (book) =>
            book.saleInfo.saleability !== 'NOT_FOR_SALE' &&
            book.volumeInfo.authors !== undefined
        );
        setBooksData(books);
      });
  }, []);

  const filteredBooks = booksData.filter((book) => {
    if (searchTerm === '') {
      return true;
    }
    return book.volumeInfo.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim());
  });

  return (
    <div id="book-section-container">
      {filteredBooks.map((book) => (
        <BookCard
          title={book.volumeInfo.title}
          author={book.volumeInfo.authors['0']}
          description={book.volumeInfo.description}
          price={book.saleInfo.listPrice.amount}
          image={book.volumeInfo.imageLinks.smallThumbnail}
          key={book.id}
          id={book.id}
        />
      ))}
    </div>
  );
};
