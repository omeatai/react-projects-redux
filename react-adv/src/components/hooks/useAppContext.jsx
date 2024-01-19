import { useContext } from "react";
import { NavbarContext } from "../Navbar";

const useAppContext = () => useContext(NavbarContext);

export default useAppContext;
