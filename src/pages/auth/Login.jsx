import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { fetchLogin } from "../services/authApi";

export const Login = () => {
  // deklarasi hooks untuk email dan password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // deklarasai isLogin untuk logic animation button
  const [isLogin, setIsLogin] = useState(false);
  // pasang useNavigate
  const navigate = useNavigate();
  
  // handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLogin(true);
    try {
      // Panggil fungsi fetchLogin untuk melakukan permintaan login ke backend
      const response = await fetchLogin(username, password);

      // Cek apakah login berhasil
      if (response.status === "OK") {
        // Jika berhasil, simpan token di localStorage atau sesi lainnya sesuai kebutuhan
        localStorage.setItem("access_token", response.data.token.access_token);
        Swal.fire({
          icon: "success",
          title: response.message,
          showClass: {
            popup: "animate__animated animate__fadeInDown",
          },
          hideClass: {
            popup: "animate__animated animate__fadeOutUp",
          },
        });
        
        navigate("/");
      } else {
        // Jika login gagal, tampilkan pesan error atau notifikasi
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: "Username or password is incorrect!",
        });
      }
    } catch (error) {
      // Tangani error jika diperlukan
      console.error("Error during login:", error);
    } finally {
      setIsLogin(false);
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
              <p className="login-box-msg">Sign in to start your session</p>

              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
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
                      {isLogin ? (
                        <>
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Login</span>
                        </>
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

              <a href="/register" className="text-center">
                Register a new membership
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
