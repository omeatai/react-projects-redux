import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="app-navbar">
      <h1 className="app-navbar-logo">React Projects</h1>
      <Link className="app-navbar-menu" to={"/"}>
        <h2>Home</h2>
      </Link>
    </nav>
  );
};
export default Navbar;
