import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "react-spinners/HashLoader";
import Swal from "sweetalert2";

export const Activate = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Lakukan tugas yang sesuai dengan aktivasi user
    // Misalnya, menunggu beberapa detik sebagai contoh "aktivasi"
    // Tugas ini bisa diganti dengan tugas asinkron lainnya sesuai kebutuhan
    setTimeout(() => {
      setIsLoading(false);

      // Tampilkan SweetAlert untuk menunjukkan pesan sukses
      Swal.fire({
        title: "Success!",
        text: "Akun berhasil diaktifkan.",
        icon: "success",
        confirmButtonText: "Ok",
      });

      // Lakukan redirect ke halaman login setelah tampilan SweetAlert
      navigate("/login");
    }, 2000); // Contoh: Menunggu 2 detik sebagai simulasi aktivasi
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
