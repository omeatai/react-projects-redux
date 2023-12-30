import Image from "../Image/Image";
import Title from "../Title/Title";
import Author from "../Author/Author";

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

export default Book;
