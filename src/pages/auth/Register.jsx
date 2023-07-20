import React from "react";

export const Register = () => {
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

              <form action="../../index.html" method="post">
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
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
                    className="form-control"
                    placeholder="Email"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
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
