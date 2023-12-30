import Book from "./Book/Book";

const BookList = () => {
  return (
    <main>
      <h1 className="booklist-heading">Welcome to my BookList</h1>
      <section className="booklist">
        <Book />
        <Book />
        <Book />
        <Book />
      </section>
    </main>
  );
};

export default BookList;
