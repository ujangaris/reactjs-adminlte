import axios from "axios";
import BASE_URL from "./baseUrlAPI";

export const fetchLogin = async (username, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during login:", error);
    throw new Error("An error occurred during login.");
  }
};

export const fetchRegister = async (name, username, email, password) => {
  try {
    const response = await axios.post(`${BASE_URL}/register`, {
      name,
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Error during registration:", error);
    throw new Error("An error occurred during registration.");
  }
};
