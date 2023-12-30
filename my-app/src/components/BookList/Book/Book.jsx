const Book = (props) => {
  const { img, title, author, caption } = props;

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
      <h5>{caption}</h5>
    </article>
  );
};

export default Book;
