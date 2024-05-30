// src/services/apiService.ts

import axios from "axios";

const API_URL = "http://localhost:8080/bwa-asset-management/vehicle/read.php"; // Ganti dengan URL API Anda

export interface Vehicle {
  id: number;
  vehicleId: string;
  websocket: string;
}

export const fetchVehicles = async (): Promise<Vehicle[]> => {
  try {
    const response = await axios.get<{ status: boolean; data: Vehicle[] }>(
      API_URL
    );
    console.log("API response:", response.data); // Tambahkan log untuk memeriksa respons
    if (response.data.status) {
      // Memastikan hasil sesuai dengan format yang diinginkan
      const vehicles = response.data.data.map((vehicle) => ({
        id: vehicle.id,
        vehicleId: vehicle.vehicleId,
        websocket: vehicle.websocket,
      }));
      console.log("Formatted vehicles:", vehicles); // Tambahkan log untuk memeriksa hasil yang diformat
      return vehicles;
    } else {
      console.error("Error in API response:", response.data);
      return [];
    }
  } catch (error) {
    console.error("Error fetching vehicles:", error);
    return [];
  }
};
