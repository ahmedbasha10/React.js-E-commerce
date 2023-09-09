import axios from "axios";

const apiUrl = "http://localhost:8000/api/auth"; // Api url

export const signup = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/signup`, userData);
    return { data: response.data, error: "" };
  } catch (error) {
    if (error.response && error.response.status === 400) {
      const errorMessage = error.response.data.message;
      return { error: errorMessage };
    } else {
      console.error("Error: ", error);
      return { error: "An error occurred during signup. Please try again." };
    }
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${apiUrl}/login`, userData);
    return { data: response.data, error: "" };
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const errorMessage = error.response.data.message;
      return { error: errorMessage };
    } else {
      console.error("Error: ", error);
      return { error: "An error occurred during login. Please try again." };
    }
  }
};
