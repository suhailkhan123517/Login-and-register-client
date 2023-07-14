import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ updateUser }) {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:8080/login", user).then((res) => {
      alert(res.data.message);
      updateUser(res.data.user);
      navigate("/");
    });
  };

  return (
    <>
      {console.log("User", user)}
      <div className="container">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center flex-column align-items-center">
            <h1 className="text-center py-3">Login</h1>
            <form onSubmit={handleSubmit} className="w-50">
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="name@example.com"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Login
              </button>
              <p className="text-center">OR</p>
              <button
                onClick={() => navigate("/register")}
                className="btn btn-primary w-100"
                type="button"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
