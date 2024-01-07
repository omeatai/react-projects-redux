import Navbar from "./components/Navbar";
import { Home, About } from "./Pages";

function App() {
  return (
    <div className="container">
      <h2>React Adv</h2>
      <Navbar />
      <Home />
      <About />
    </div>
  );
}

export default App;
