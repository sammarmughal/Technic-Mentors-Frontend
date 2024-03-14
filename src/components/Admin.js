import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Admindata from "./Admindata";
import header from "../img/bg-header.png"

export default function Admin() {
  const [credentials, setCredentials] = useState({
    category: "",
  });

  const addCategory = async (e) => {
    const { category } = credentials;
    e.preventDefault();
    await fetch("https://technicsite.vercel.app/api/auth/createcategory", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ category }),
    });
    setCredentials({
      category: "",
    });
  };
  const onchange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  return (
    <div className="container-fluid ps-0">
      <div className="home-container">
        <div
          className="background-image1"
          style={{ backgroundImage: `url(${header})` }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-center text-white animate__animated animate__zoomIn"
              >
                Technic Mentors : Admin Panel
              </h1>
            </div>
          </div>
        </div>
      </div>
      
      <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
        <div className=" col-md-2">
          <div
            className="background-img5"
            style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
          >
            <div
              className="color-overlay5 pb-3 pt-2 outlet"
            >
              <Admindata/>
            </div>
          </div>
        </div>

        <div className="col-md-10 mt-5 mb-5" style={{ textAlign: "justify" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
