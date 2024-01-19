import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContext from "./contexts/AppContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AppContext>
    <App />
  </AppContext>
);
