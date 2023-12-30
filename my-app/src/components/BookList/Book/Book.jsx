const Book = () => {
  const title =
    "Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones";
  const author = "James Clear";
  const img = "./assets/images/atomic_habits.jpg";

  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author.toUpperCase()}</h4>
    </article>
  );
};

export default Book;
