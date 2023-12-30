import Book from "./Book/Book";

const BookList = () => {
  const book = {
    title:
      "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
    author: "James Clear",
    img: "./assets/images/atomic_habits.jpg",
    caption: "Best Selling Book of 2020",
  };

  return (
    <main>
      <h1 className="booklist-heading">Welcome to my BookList</h1>
      <section className="booklist">
        <Book
          author={book.author}
          title={book.title}
          img={book.img}
          caption={book.caption}
        />
        <Book
          author={book.author}
          title={book.title}
          img={book.img}
          caption={book.caption}
        />
        <Book
          author={book.author}
          title={book.title}
          img={book.img}
          caption={book.caption}
        />
        <Book
          author={book.author}
          title={book.title}
          img={book.img}
          caption={book.caption}
        />
      </section>
    </main>
  );
};

export default BookList;
