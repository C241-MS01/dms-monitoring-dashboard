import axios from "axios";

const API_URL = "http://localhost:9000/api/v1/auth";

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
    .post<User>(API_URL + "/signup", {
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
    .post<User>(API_URL + "/login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      console.log(response)
      return response.data;
    }).catch((e) =>{
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
