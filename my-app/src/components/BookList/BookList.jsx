import Book from "./Book/Book";
import { books } from "./data/books";

const BookList = () => {
  const formStyle = {
    border: "4px solid #bbb",
    borderRadius: "1rem",
    padding: "2rem",
    maxWidth: "50rem",
    margin: "8rem auto -8rem auto",
  };

  const inputStyle = {
    margin: "1rem 1rem 0 0",
    padding: "0.5rem 2rem",
    border: "1px solid #bbb",
    borderRadius: "1rem",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: "1rem",
    width: "70%",
    display: "block",
  };

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
      <section style={{ margin: "2rem" }}>
        <form style={formStyle}>
          <h2>Search for Book</h2>
          <input
            type="text"
            name="searchBook"
            onChange={handleBookSearch}
            style={inputStyle}
          />
        </form>
      </section>
      <section className="booklist">
        {books.map((book) => {
          return <Book {...book} key={book.id} getBookByID={getBookByID} />;
        })}
      </section>
    </main>
  );
};

export default BookList;
