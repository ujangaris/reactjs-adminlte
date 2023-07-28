import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchAddRoleData } from "../services/rolesApi";
import Swal from "sweetalert2";

const CreateRole = () => {
  // deklarasi hooks role
  const [role, setRole] = useState("");
  // deklarasai isLoading untuk logic animation button
  const [isLoading, setIsLoading] = useState(false);
  // pasang useNavigate
  const navigate = useNavigate();
// pasang handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // tampung nilai token kedalam variable token
      const token = localStorage.getItem("access_token");
      if (!token) {
        // Jika access_token tidak ada di localStorage, redirect ke halaman login
        navigate("/login");
        return;
      }
      const response = await fetchAddRoleData(token, role); // Tambahkan token sebagai parameter pertama
      if (response.status === "CREATED") {
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

        navigate("/roles");
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add Role</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/roles">Role</Link>
                </li>
                <li className="breadcrumb-item active">Add Role</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            {/* <!-- left column --> */}
            <div className="col-md-12">
              {/* <!-- jquery validation --> */}
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">
                    Form <small>Add Role</small>
                  </h3>
                </div>
                {/* <!-- /.card-header --> */}
                {/* <!-- form start --> */}
                <form id="quickForm" onSubmit={handleSubmit}>
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="role">Name Role</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter name role"
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-success">
                      {isLoading ? (
                        <>
                          <span>Loading...</span>
                        </>
                      ) : (
                        <>
                          <span>Add Role</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
              {/* <!-- /.card --> */}
            </div>
            {/* <!--/.col (left) --> */}
            {/* <!-- right column --> */}
            <div className="col-md-6"></div>
            {/* <!--/.col (right) --> */}
          </div>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
    </>
  );
};

export default CreateRole;
