import React, { useRef, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Admindata from "./Admindata";
import header from "../img/bg-header.png"
import Swal from "sweetalert2";

export default function Admin() {

  const [password, setPassword] = useState({
    email: "",
    oldpassword: "",
    newpassword: "",
    confirmpas: "",
  });
  const modalRef = useRef();

  const changePas = async () => {
    const pasError = document.getElementById("confirmpas");
    const newError = document.getElementById("newpas");
    const oldError = document.getElementById("oldpas");
    let Error = false;
    if (!password.oldpassword) {
      oldError.innerText = "Please enter old password";
      Error = true;
    } else {
      oldError.innerText = "";
    }
    if (!password.newpassword) {
      newError.innerText = "Please enter new password";
      Error = true;
    } else {
      newError.innerText = "";
    }
    if (!password.confirmpas) {
      pasError.innerText = "Please enter confirm password";
      Error = true;
    } else if (password.newpassword !== password.confirmpas) {
      pasError.innerText = "Password does not match";
      Error = true;
    } else {
      pasError.innerText = "";
    }
    if (Error) {
      return;
    }

    const res = await fetch("https://technic-mentors-backend.vercel.app/api/auth/changepassword", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        oldPassword: password.oldpassword,
        newPassword: password.newpassword,
        email: password.email,
      }),
    });
    console.log(res);
    const data = await res.json();
    // console.log(data)
    if (data.error === "Old password incorrect") {
      oldError.innerText = data.error;
    } else if (res.ok) {
      // Request was successful, close the modal using Bootstrap's hide method
      oldError.innerText = "";
      Swal.fire({
        icon: "success",
        title: "Password Changed",
        text: "Your password has been changed successfully!",
      });
    }
    setPassword({
      email: "",
      oldpassword: "",
      newpassword: "",
      confirmpas: "",
    });
  };

  const handlePasChange = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  return (
    <div>
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

      <div className="container-fluid ps-0">
        <div className="row mt-3" style={{ backgroundColor: "rgb(246 249 255)" }}>
          <div className="d-flex justify-content-end pt-3">
            <button
              className="btn btn-primary mx-2"
              data-bs-toggle="modal"
              data-bs-target="#static3"
            >
              Change Password
            </button>
            <Link to="/adminLogin"><button className="btn btn-primary">Log Out</button></Link>
          </div>
          <div className=" col-md-2">
            <div
              className="background-img5"
              style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
            >
              <div
                className="color-overlay5 pb-3 pt-2 outlet"
              >
                <Admindata />
              </div>
            </div>
          </div>

          <div className="col-md-10 mt-5 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>

      {/* Change Password Modal */}
      <div
        className="modal fade"
        id="static3"
        ref={modalRef}
        data-bs-backdrop="static3"
        data-bs-keyboard="false"
        tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <div>
                <div>
                  <form>
                    <label className="form-lable">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      name="email"
                      value={password.email}
                      onChange={handlePasChange}
                    />
                    <label className="form-lable">Old Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="oldpassword"
                      value={password.oldpassword}
                      onChange={handlePasChange}
                    />
                    <div id="oldpas" style={{ color: "red" }}></div>
                    <label className="form-lable">New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="newpassword"
                      value={password.newpassword}
                      onChange={handlePasChange}
                    />
                    <div id="newpas" style={{ color: "red" }}></div>
                    <label className="form-lable">Confirm New Password</label>
                    <input
                      className="form-control"
                      type="password"
                      name="confirmpas"
                      value={password.confirmpas}
                      onChange={handlePasChange}
                    />
                    <div id="confirmpas" style={{ color: "red" }}></div>
                  </form>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button "
                className="btn btn-primary btn1"
                onClick={changePas}
              >
                Change Password
              </button>
              <button
                type="button "
                className="btn btn-primary btn1"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
