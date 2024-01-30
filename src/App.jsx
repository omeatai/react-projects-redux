import { Routes, Route, Link, Navigate, Outlet } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <div className="container">
              <Navbar />
              <section className="wrapper">
                <Outlet />
              </section>
            </div>
          }
        >
          <Route
            path=""
            element={
              <h1>
                <HomePage />
              </h1>
            }
          />
          <Route path="page2" element={<h1>home page 2</h1>} />
        </Route>
        {/* <Route path="/start" element={<Navigate to="/home" />} /> */}
        {/* <Route path="/notification" element={<h1>notification page</h1>} />
        <Route
          path="/notification/:id"
          element={<h1>notification details pages</h1>}
        />
        <Route path="/login" element={<h1> login page </h1>} /> */}
      </Routes>
    </>
  );
}

export default App;
