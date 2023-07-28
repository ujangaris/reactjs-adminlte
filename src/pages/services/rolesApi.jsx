import axios from "axios";
import BASE_URL from "./baseUrlAPI";
// Ganti dengan URL server backend Anda

export const fetchRolesData = async (token) => {
  try {
    const response = await axios.get(`${BASE_URL}/roles`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching roles data:", error);
    throw error;
  }
};
