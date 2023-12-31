const Greeting = () => {
  return (
    <section>
      <Person />
      <Message />
    </section>
  );
};

const Person = () => <h2>John Doe</h2>;

const Message = () => {
  return <p>This is my message.</p>;
};

export default Greeting;
