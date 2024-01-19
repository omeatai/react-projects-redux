import { useReducer } from "react";
import { data } from "../data";

// default/initial state
const defaultState = {
  people: data,
  isLoading: false,
};

// Actions
const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

// reducer function - whatever state is returned from the function is the new state
// dispatch({type:'SOME_ACTION'}) an action - handle it in reducer, return new state
const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    console.log(action);
    return { ...state, people: action.payload };
  } else if (action.type === REMOVE_ITEM) {
    // let newPeople = state.people.filter((person) => person.id!== action.payload);
    // return { people: newPeople };
    console.log(action);
    return {
      ...state,
      people: state.people.filter((person) => person.id !== action.payload.id),
    };
  } else if (action.type === RESET_LIST) {
    console.log(action);
    return {
      ...state,
      people: action.payload,
    };
  }
  //   return state;
  throw new Error(`No Matching "${action.type}" - action type`);
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
