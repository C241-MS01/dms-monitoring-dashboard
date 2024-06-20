import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;

export interface User{
  token: string;
  user: {
    email: string;
    created_at: string;
    id: string;
  };
}

const signup = (email: string, password: string): Promise<User> => {
  return axios
    .post<User>(API_URL + "/auth/signup", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
};

const login = (email: string, password: string): Promise<User> => {
  return axios
    .post<User>(API_URL + "/auth/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    })
    .catch((e) => {
      throw new Error(e);
    });
};

const logout = (): void => {
  localStorage.removeItem("user");
};

const getCurrentUser = (): User | null => {
  const userString = localStorage.getItem("user");
  return userString ? JSON.parse(userString) : null;
};

const authService = {
  signup,
  login,
  logout,
  getCurrentUser,
};

export default authService;
