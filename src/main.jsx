import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Index";
import Role from "./pages/role/Index";
import CreateUser from "./pages/user/CreateUser";
import EditUser from "./pages/user/EditUser";
import CreateRole from "./pages/role/CreateRole";
import EditRole from "./pages/role/EditRole";
import ListUser from "./pages/user/Index";
import { Register } from "./pages/auth/Register.jsx";
import { Login } from "./pages/auth/Login.jsx";
import { Activate } from "./pages/auth/Activate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <App /> */}
      <Routes>
        <Route path="/" element={<App />} exact>
          <Route path="/" index={true} element={<Dashboard />} />
          <Route path="/Roles" element={<Role />} />
          <Route path="/create-user" element={<CreateUser />} />
          <Route path="/edit-user" element={<EditUser />} />
          <Route path="/create-role" element={<CreateRole />} />
          <Route path="/edit-role" element={<EditRole />} />
          <Route path="/users" element={<ListUser />} />
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/user/activate/:id" element={<Activate />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
