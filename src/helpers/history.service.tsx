import axios, { AxiosResponse } from "axios";

interface ApiResponse {
  alerts: Alert[];
}

export interface Alert {
  video_id: string;
  id: string;
  ear: number;
  mar: number;
  sleep_duration: number;
  yawning_duration: number;
  focus_duration: number;
  object_detected: string;
  time: string;
}

export const historyAlerts = (
  token: string,
  vehicle_id: string,
  videoId: string
): Promise<Alert[]> => {
  return axios
    .get<ApiResponse>(
      `http://localhost:9000/api/v1/vehicles/${vehicle_id}/videos/${videoId}/alerts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response: AxiosResponse<ApiResponse>) => {
        console.log("API response:", response.data);
      if (response.data.alerts) {
        return response.data.alerts;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Handle errors appropriately, like rethrowing or handling locally
      throw error;
    });
};