import Book from "./Book/Book";

const BookList = () => {
  const books = [
    {
      author: "James Clear",
      title:
        "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones",
      img: "./assets/images/atomic_habits.jpg",
      id: 1,
      caption: "Best Selling Book of 2020",
    },
    {
      author: "Dr. Kimberly D. Moore",
      title: "The Bible in 52 Weeks: A Yearlong Bible Study for Women",
      img: "https://m.media-amazon.com/images/I/913KWawg9gL._SL1500_.jpg",
      id: 2,
      caption: "Explore how God's wisdom can be applied to your daily life",
    },
    {
      author: "James McBride",
      title: "The Heaven & Earth Grocery Store: A Novel",
      img: "https://m.media-amazon.com/images/I/81FS3wyevDL._SL1500_.jpg",
      id: 3,
      caption: "A murder mystery locked inside a Great American Novel",
    },
    {
      author: "Liz Cheney",
      title: "Oath and Honor: A Memoir and a Warning",
      img: "https://m.media-amazon.com/images/I/71CX11nGhWL._SL1500_.jpg",
      id: 4,
      caption:
        "A gripping first-hand account of the January 6th, 2021, insurrection ",
    },
  ];

  return (
    <main>
      <h1 className="booklist-heading">Welcome to my BookList</h1>
      <EventExamples />
      <section className="booklist">
        {books.map((book) => {
          //   console.log(book);
          return <Book {...book} key={book.id} />;
        })}
      </section>
    </main>
  );
};

export default BookList;

const EventExamples = () => {
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

  const buttonStyle = {
    margin: "1rem 1rem 0 0",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "1rem",
    backgroundColor: "#e52b50",
    color: "#fff",
    cursor: "pointer",
  };

  const handleFormInput = (e) => {
    console.log(`${e.target.value} | Name: ${e.target.name}`);
  };
  const handleButtonClick = (e) => {
    console.log(`Button Clicked`);
    alert(`Button Clicked`);
  };
  const handleFormSubmission = (e) => {
    e.preventDefault();
    console.log("Form Submitted");
    alert(`Form Submitted`);
  };

  return (
    <section style={{ margin: "2rem" }}>
      <form style={formStyle} onSubmit={handleFormSubmission}>
        <h2>Example Form</h2>
        <input
          type="text"
          name="example"
          onChange={handleFormInput}
          style={inputStyle}
        />
        <button type="button" style={buttonStyle} onClick={handleButtonClick}>
          HandleButtonClick
        </button>
        <button type="submit" style={buttonStyle}>
          HandleFormSubmission
        </button>
      </form>
    </section>
  );
};
