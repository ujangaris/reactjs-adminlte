import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  // deklarasi hooks untuk register user
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // pasang handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/starter-api/v1/user/create`, {
        name,
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === "CREATED") {
          // Jika respons dari server berhasil dan status "CREATED",
          // maka simpan ID pengguna ke local storage
          const id_user = res.data.data.id_user;
          localStorage.setItem("id_user", id_user);
          alert("Created user successfully");
          navigate(`/user/activate/${id_user}`);
        } else {
          alert("Failed to create user");
        }
      })
      .catch((err) => console.error(err));
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
                      Register
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
