const Book = (props) => {
  const { img, title, author, caption, id, getBookByID, number, children } =
    props;

  const buttonStyle = {
    margin: "1rem 1rem 0 0",
    padding: "0.5rem 2rem",
    border: "none",
    borderRadius: "1rem",
    backgroundColor: "#e52b50",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`# ${number + 1}`}</span>
      <h5>{caption}</h5>
      {children}
      <button style={buttonStyle} onClick={() => getBookByID(id)}>
        Get Book
      </button>
    </article>
  );
};

export default Book;
