import axios, { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;
export interface Vehicle {
  id: string;
  created_at: string;
}

interface ApiResponse {

    count: number;
    vehicles: Vehicle[];

}

export const listVehicles = (token: string): Promise<Vehicle[]> => {
  return axios
    .get<ApiResponse>(API_URL + "/vehicles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse<ApiResponse>) => {
      if (response.data.vehicles) {
        return response.data.vehicles;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Tangani error secara sesuai, seperti melempar kembali error atau menangani secara lokal
      throw error;
    });
};