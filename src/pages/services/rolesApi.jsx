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

export const fetchAddRoleData = async (token, name) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/role/create`,
      {
        name,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching add role data:", error);
    throw error;
  }
};
