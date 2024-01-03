import { useState } from "react";
import { data } from "../data";

const ReactUseStateExample = () => {
  const [count, setCount] = useState(0);
  const [people, setPeople] = useState(data);
  const INITIAL_PERSON = {
    firstName: "peter",
    lastName: "doe",
    age: 24,
    hobby: "read books",
  };
  const [person, setPerson] = useState(INITIAL_PERSON);

  const handleIncrement = () => {
    setTimeout(() => {
      setCount((prevState) => {
        const updatedState = prevState + 1;
        console.log("count: ", updatedState);
        return updatedState;
      });
    }, 3000);
  };

  const handleClearList = () => {
    setPeople([]);
    console.log("List Cleared");
  };

  const handleRemoveItem = (id) => {
    const filteredPeople = people.filter((person) => person.id !== id);
    console.log("filteredPeople: ", filteredPeople);
    setPeople(filteredPeople);
  };

  const displayPerson = () => {
    setPerson(
      person.firstName === INITIAL_PERSON.firstName
        ? {
            ...INITIAL_PERSON,
            firstName: "mary",
            age: 28,
            hobby: "scream at the computer",
          }
        : INITIAL_PERSON
    );
  };

  return (
    <>
      <div>ReactUseStateExample</div>
      <div>
        <p>{count}</p>
        <button type="button" className="btn" onClick={handleIncrement}>
          Increment
        </button>
      </div>

      <hr style={{ margin: "2rem 0rem" }} />

      <div>
        {people.map((person) => {
          const { id, name } = person;
          return (
            <h4 key={id}>
              {name}
              <button onClick={() => handleRemoveItem(id)} className="btn">
                X
              </button>
            </h4>
          );
        })}
        <button type="button" className="btn" onClick={handleClearList}>
          Clear List
        </button>
      </div>

      <hr style={{ margin: "2rem 0rem" }} />

      <div>
        <h3>{person.firstName}</h3>
        <h3>{person.lastName}</h3>
        <h3>{person.age}</h3>
        <h4>Enjoys To: {person.hobby}</h4>
        <button className="btn" onClick={displayPerson}>
          show john
        </button>
      </div>

      <hr style={{ margin: "2rem 0rem" }} />
    </>
  );
};

export default ReactUseStateExample;
