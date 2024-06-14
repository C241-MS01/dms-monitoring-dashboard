import axios, { AxiosResponse } from "axios";
import authService from "helpers/auth.service";

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
    .get<ApiResponse>("http://localhost:9000/api/v1/vehicles", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse<ApiResponse>) => {
        console.log("API response:", response.data);
      if (response.data.vehicles) {
        console.log("vehicles:", response.data.vehicles);
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