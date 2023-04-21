import { useEffect, useState } from 'react';
import { BookCard } from '../components/BookCard';

export const BooksSection = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.nytimes.com/svc/books/v3/lists.json?list-name=hardcover-fiction&api-key=NwI4tENoOvmQiOl8Pml4TTcdD90O1oj7'
    )
      .then((res) => res.json())
      .then((data) => {
        setBooksData(data.results);
        console.log(data.results);
      });
  }, []);

  return (
    <div id="book-section-container">
      {booksData.map((book) => (
        <BookCard
          key={book.book_details[0].primary_isbn13}
          title={book.book_details[0].title}
        />
      ))}
    </div>
  );
};
