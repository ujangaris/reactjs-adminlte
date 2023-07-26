import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "react-spinners/HashLoader";

export const Activate = () => {
  // deklarasi hooks isLoading
  const [isLoading, setIsLoading] = useState(true);
  // pasang useNavigate
  const navigate = useNavigate();
  // pasang useEffect untuk aktivasi user
  useEffect(() => {
    const id_user = localStorage.getItem("id_user");
    if (!id_user) {
      navigate("/login");
    } else {
      axios
        .patch(`http://localhost:5000/starter-api/v1/user/activate/${id_user}`)
        .then((res) => {
          setIsLoading(false);
          console.log(res);
          localStorage.removeItem("id_user"); // Remove id_user from localStorage
          navigate("/login");
        })
        .catch((err) => {
          setIsLoading(false);
          console.error(err);
        });
    }
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Loading color="#36d7b7" />
      </div>
    );
  }

  return null;
};
