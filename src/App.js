import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import { useEffect, useState } from "react";

function App() {
  const [userLogin, setUserLogin] = useState({});

  useEffect(() => {
    setUserLogin(JSON.parse(localStorage.getItem("MyUser")));
  }, []);

  const updateUser = (userLogin) => {
    localStorage.setItem("MyUser", JSON.stringify(userLogin));
    setUserLogin(userLogin);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              userLogin && userLogin._id ? (
                <Home updateUser={updateUser} />
              ) : (
                <Login updateUser={updateUser} />
              )
            }
          />
          <Route path="/login" element={<Login updateUser={updateUser} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
