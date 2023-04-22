import { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';

export const BooksSection = (props) => {
  const [booksData, setBooksData] = useState([]);
  const searchTerm = props.searchQuery;

  useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=NwI4tENoOvmQiOl8Pml4TTcdD90O1oj7'
    )
      .then((res) => res.json())
      .then((data) => {
        setBooksData(data.results);
      });
  }, []);

  const filteredBooks = booksData.filter((book) => {
    if (searchTerm === '') {
      return true;
    }

    return book.book_details[0].title.toLowerCase().includes(searchTerm);
  });

  return (
    <div id="book-section-container">
      {filteredBooks.map((book) => (
        <BookCard
          key={book.book_details[0].primary_isbn13}
          title={book.book_details[0].title}
          author={book.book_details[0].author}
          description={book.book_details[0].description}
          price={book.book_details[0].price}
        />
      ))}
    </div>
  );
};
