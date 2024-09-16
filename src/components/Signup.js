import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Signup() {
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    phoneno: ""
  });
  let navigate = useNavigate();
  const handlesubmit = async (e) => {
    e.preventDefault();
    const nameError = document.getElementById("name-error")
    const emailError = document.getElementById("email-error")
    const passwordError = document.getElementById("password-error")
    const phonenoError = document.getElementById("phoneno-error")
    const { email, password, phoneno, name } = credentials;
    let Error;
    if (!name) {
      nameError.innerText = 'Please enter name'
      Error = true
    } else {
      nameError.innerText = ''
    }
    if (!email) {
      emailError.innerText = 'Please enter email'
      Error = true
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      emailError.innerText = 'Please enter a valid email address';
      Error = true;
    } else {
      emailError.innerText = ''
    }
    if (!phoneno) {
      phonenoError.innerText = 'Please enter number'
      Error = true
    } else if (!/^\d+$/.test(phoneno)) {
      phonenoError.innerText = 'Please enter a valid number';
      Error = true;
    } else {
      phonenoError.innerText = ''
    }
    if (!password) {
      passwordError.innerText = 'Please enter password'
      Error = true
    } else {
      passwordError.innerText = ''
    }
    if (Error) {
      return;
    }
    const res = await fetch("https://technic-mentors-backend.vercel.app/api/auth/signUp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, name, phoneno }),
    });
    if (res.ok) {
      navigate("/userLogin")
    }
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{ backgroundColor: "#f1f6fe" }}
      className="background-img5"
    >
      <div className="color-overlay5">
        <div
          className="allHeaderBg"
        >
          <div className="allHeader-overlay d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn allHeaderP"
              >
                Sign Up
              </h1>
            </div>
          </div>
        </div>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-md-4">
              <form onSubmit={handlesubmit}>
                <div className="mb-1">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={credentials.name}
                    onChange={onchange}
                    id="email"
                  />
                  <div className="text-danger" id="name-error"></div>
                </div>
                <div className="mb-1">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={credentials.email}
                    onChange={onchange}
                    id="email"
                  />
                  <div className="text-danger" id="email-error"></div>
                </div>
                <div className="mb-1">
                  <label htmlFor="phoneno" className="form-label">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    className="form-control"
                    name="phoneno"
                    value={credentials.phoneno}
                    onChange={onchange}
                    id="phoneno"
                  />
                  <div className="text-danger" id="phoneno-error"></div>
                </div>
                <div className="mb-1">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    name="password"
                    value={credentials.password}
                    onChange={onchange}
                    id="password"
                  />
                  <div className="text-danger" id="password-error"></div>
                </div>
                <div className="d-flex justify-content-center">
                  <button
                    type="submit"
                    className="btn btnFill mb-2 mt-4 px-4 py-2"
                  >
                    Sign Up
                    &nbsp;
                    <i className="fas fa-arrow-right"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <p className='text-center formButton'>
            Already Have Account? <Link to="/userLogin">Sign In</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
