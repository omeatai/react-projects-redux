import Book from "./Book/Book";
import { books } from "./data/books";

const BookList = () => {
  const handleBookSearch = (e) => {
    const searchTerm = e.target.value;
    console.log(searchTerm);
    const filteredBooks = books.filter((book) => {
      return book.title.toLowerCase().includes(searchTerm.toLowerCase());
    });
    console.log(filteredBooks);
  };

  const getBookByID = (id) => {
    const book = books.find((book) => book.id === id);
    console.log(book);
  };

  return (
    <main>
      <h1 className="booklist-heading">Welcome to my BookList</h1>
      <section style={{ margin: "1rem" }}>
        <form className="booklist-form">
          <h2>Search for Book</h2>
          <input
            type="text"
            name="searchBook"
            onChange={handleBookSearch}
            className="booklist-input"
            placeholder="Search for a book..."
          />
        </form>
      </section>
      <h1 className="booklist-topic">amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book
              {...book}
              key={book.id}
              getBookByID={getBookByID}
              number={index}
            />
          );
        })}
      </section>
    </main>
  );
};

export default BookList;
