import "bootstrap/dist/css/bootstrap.min.css";
import classes from "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome";
import Login from "./pages/Login/Login.js";

const App = () => {
  return (
    <div className={classes.left_navlinks}>
      <main>
        <Routes>
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" exact>
            home
          </Route>
          <Route path="*" element={<Navigate to="/welcome" />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
