import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
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
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios.post("http://localhost:8080/register", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("did't match reEnterPassword please correct password");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row ">
          <div className="col-12 d-flex justify-content-center flex-column align-items-center">
            <h1 className="text-center py-3">Register</h1>
            <form onSubmit={handleSubmit} className="w-50">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Name"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>
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
              <div className="mb-3">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Re Enter Password"
                  name="reEnterPassword"
                  value={user.reEnterPassword}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-primary w-100" type="submit">
                Register
              </button>
              <p className="text-center">OR</p>
              <button
                onClick={() => navigate("/login")}
                className="btn btn-primary w-100"
                type="button"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
