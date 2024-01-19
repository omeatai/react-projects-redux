import { useState, createContext, useContext } from "react";
import PropTypes from "prop-types";

const GlobalContext = createContext();

export const useGlobalContext = () => useContext(GlobalContext);

const AppContext = ({ children }) => {
  const [user, setUser] = useState({ name: "bob" });
  const logout = () => setUser(null);

  return (
    <GlobalContext.Provider value={{ user, logout }}>
      {children}
    </GlobalContext.Provider>
  );
};

AppContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
