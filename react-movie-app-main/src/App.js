import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login.js";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div className={classes.left_navlinks}>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
