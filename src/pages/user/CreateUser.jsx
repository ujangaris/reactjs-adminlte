import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const CreateUser = () => {
  // deklarasi hooks untuk create user
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
        alert("Created user successfully");
        navigate("/users");
      })
      .catch((err) => console.error(err));
  };
  // drag end drop image
  useEffect(() => {
    const dropzone = document.getElementById("dropzone");
    const fileInput = document.getElementById("fileInput");
    const uploadedImage = document.getElementById("uploadedImage");

    const handleDragOver = (e) => {
      e.preventDefault();
      dropzone.classList.add("highlight");
    };

    const handleDragLeave = () => {
      dropzone.classList.remove("highlight");
    };

    const handleDrop = (e) => {
      e.preventDefault();
      dropzone.classList.remove("highlight");
      const file = e.dataTransfer.files[0];
      displayImage(file);
    };

    const handleInputChange = (e) => {
      const file = e.target.files[0];
      displayImage(file);
    };

    dropzone.addEventListener("dragover", handleDragOver);
    dropzone.addEventListener("dragleave", handleDragLeave);
    dropzone.addEventListener("drop", handleDrop);
    fileInput.addEventListener("change", handleInputChange);

    return () => {
      dropzone.removeEventListener("dragover", handleDragOver);
      dropzone.removeEventListener("dragleave", handleDragLeave);
      dropzone.removeEventListener("drop", handleDrop);
      fileInput.removeEventListener("change", handleInputChange);
    };
  }, []);
  // preview image
  const displayImage = (file) => {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        const uploadedImage = document.getElementById("uploadedImage");
        uploadedImage.src = e.target.result;
        uploadedImage.style.display = "block";
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Add User</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item">
                  <Link to="/users">User</Link>
                </li>
                <li className="breadcrumb-item active">Add User</li>
              </ol>
            </div>
          </div>
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
      <section className="content">
        <div className="container-fluid">
          <form onSubmit={handleSubmit}>
            <div className="row">
              {/* <!-- left column --> */}
              <div className="col-md-8">
                {/* <!-- jquery validation --> */}

                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">User Info</h3>
                  </div>
                  {/* <!-- /.card-header --> */}
                  {/* <!-- form start --> */}
                  <div className="card-body">
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Name</label>
                      <input
                        type="text"
                        name="name"
                        className="form-control"
                        placeholder="Enter name"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Username</label>
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Enter username"
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Enter Password"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                </div>
                {/* <!-- /.card --> */}
              </div>
              <div className="col-md-4">
                {/* <!-- jquery validation --> */}

                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Select Role And Status</h3>
                  </div>
                  {/* <!-- /.card-header --> */}
                  {/* <!-- form start --> */}
                  <div className="card-body">
                    <div className="form-group">
                      <label>Select Role</label>
                      <select className="form-control">
                        <option>Admin</option>
                        <option>User </option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="status" className="mx-1">
                        Status :
                      </label>
                      <input
                        type="checkbox"
                        id="toggle-two"
                        data-style="ios slow"
                        data-size="small"
                        data-height="5"
                        data-offstyle="danger"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="status" className="mx-1">
                        Upload Image :
                      </label>
                      <div
                        id="dropzone"
                        className="dropzone"
                        onClick={() =>
                          document.getElementById("fileInput").click()
                        }
                      >
                        <input
                          type="file"
                          id="fileInput"
                          style={{ display: "none" }}
                        />
                        <h1>
                          <span className="fas fa-file-upload"></span>
                        </h1>
                        <p>Drag and drop image here, or click to select</p>
                      </div>
                      <img
                        id="uploadedImage"
                        src=""
                        alt=""
                        className="img-fluid mt-3"
                        style={{ display: "none" }}
                      />
                    </div>
                  </div>
                  {/* <!-- /.card-body --> */}
                  <div className="card-footer">
                    <button type="submit" className="btn btn-primary">
                      Add User
                    </button>
                  </div>
                </div>
                {/* <!-- /.card --> */}
              </div>
            </div>
          </form>
          {/* <!-- /.row --> */}
        </div>
        {/* <!-- /.container-fluid --> */}
      </section>
    </>
  );
};

export default CreateUser;
