import React from 'react'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function UserLogin() {
    const [credentials, setCredentials] = useState({
        email: "",
        password: "",
    });
    let navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();
        const { email, password } = credentials;
        const res = await fetch("https://technic-mentors-backend.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });
        const json = await res.json();
        console.log(json)
        const both = document.getElementById("number");
        both.innerText = json.error;
        if (res.ok) {
            sessionStorage.setItem("User", JSON.stringify(json))
            navigate("/user-profile");
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
                                Sign In
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-4">

                            <form onSubmit={handlesubmit}>
                                <div id="number" className="text-danger text-center"></div>

                                <div className="mb-1">
                                    <label htmlFor="email" className="form-label text-dark">
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
                                    <div className="email" style={{ color: "red" }} id="mail"></div>
                                </div>
                                <div className="mb-1">
                                    <label htmlFor="password" className="form-label text-dark ">
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
                                    <div
                                        className="phone no"
                                        style={{ color: "red" }}
                                        id="pass"
                                    ></div>
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="submit"
                                        className="btn btnFill mb-3 mt-4 px-4 py-2"
                                    >
                                        Log In
                                        &nbsp;
                                        <i className='fas fa-arrow-right'></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <p className='text-center formButton'>
                        Don't Have An Account? <Link to="/signup">SignUp</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}
