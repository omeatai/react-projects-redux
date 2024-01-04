import { useState, useEffect } from "react";

const ReactCleanupFunction = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};

const RandomComponent = () => {
  useEffect(() => {
    console.log("hi, I am using useEffect!");
    const intId = setInterval(() => {
      console.log("hello from interval");
    }, 1000);
    return () => {
      clearInterval(intId);
      console.log("cleanup function");
    };
  }, []);

  return <h1>hello there</h1>;
};

export default ReactCleanupFunction;
