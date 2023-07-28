import React, { useState } from "react";
import Swal from "sweetalert2";
import "animate.css";
import { fetchRegister } from "../services/authApi";

export const Register = () => {
  // deklarasi hooks untuk register user
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const [isRegistering, setIsRegistering] = useState(false); // State untuk kondisi animasi tombol
  // pasang handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsRegistering(true);
    try {
      // Panggil fungsi fetchRegister untuk melakukan permintaan register ke backend
      const response = await fetchRegister(name, username, email, password);
      if (response.status === "CREATED") {
        // Jika respons dari server berhasil dan status "CREATED",
        // maka tampilkan alert succes
        Swal.fire({
          icon: "success",
          timer: 3000,
          title: "Register successfully",
          text: "Please check your email to activated!",
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
      } else {
        console.log("Failed to create user");
      }
    } catch (error) {
      // Tangani error jika diperlukan
      Swal.fire({
        icon: "error",
        timer: 3000,
        title: "Failed to create user",
        showClass: {
          popup: "animate__animated animate__fadeInDown",
        },
        hideClass: {
          popup: "animate__animated animate__fadeOutUp",
        },
      });
      console.error("Error during register:", error);
    } finally {
      setIsRegistering(false);
    }
  };
  return (
    <>
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="../../index2.html" className="h1">
                <b>Starter</b>KIT
              </a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Register a new membership</p>

              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                    value={username}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  {/* <!-- /.col --> */}
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary btn-block">
                      {isRegistering ? (
                        <>
                          <span>Loading...</span>{" "}
                        </>
                      ) : (
                        <span>Register</span>
                      )}
                    </button>
                  </div>
                  {/* <!-- /.col --> */}
                </div>
              </form>

              <div className="social-auth-links text-center">
                <a href="#" className="btn btn-block btn-primary">
                  <i className="fab fa-facebook mr-2"></i>
                  Sign up using Facebook
                </a>
                <a href="#" className="btn btn-block btn-danger">
                  <i className="fab fa-google-plus mr-2"></i>
                  Sign up using Google+
                </a>
              </div>

              <a href="/login" className="text-center">
                I already have a membership
              </a>
            </div>
            {/* <!-- /.form-box --> */}
          </div>
          {/* <!-- /.card --> */}
        </div>
      </div>
    </>
  );
};
