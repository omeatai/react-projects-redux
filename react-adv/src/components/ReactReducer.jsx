import { useReducer } from "react";
import { data } from "../data";

// Actions
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from "../store/actions";

// reducer function
import reducer from "../store/reducer";

// default/initial state
const defaultState = {
  people: data,
  isLoading: false,
};

const ReactReducer = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const removeItem = (id) => {
    // let newPeople = people.filter((person) => person.id !== id);
    // setPeople(newPeople);
    dispatch({ type: REMOVE_ITEM, payload: { id } });
  };

  const resetList = () => {
    // setPeople(data);
    dispatch({ type: RESET_LIST, payload: data });
  };

  const clearList = () => {
    // setPeople([]);
    dispatch({ type: CLEAR_LIST, payload: [] });
  };

  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}
      {state.people.length < 1 ? (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={resetList}
        >
          reset
        </button>
      ) : (
        <button
          className="btn"
          style={{ marginTop: "2rem" }}
          onClick={clearList}
        >
          clear
        </button>
      )}
    </div>
  );
};

export default ReactReducer;
