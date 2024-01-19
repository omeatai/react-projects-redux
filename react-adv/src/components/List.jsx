import React from "react";
import Person from "./Person";

const List = ({ people }) => {
  return (
    <div>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
};

const MemoizedList = React.memo(List);
export default MemoizedList;
