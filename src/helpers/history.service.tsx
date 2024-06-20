import axios, { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;
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
      API_URL + `/vehicles/${vehicle_id}/videos/${videoId}/alerts`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response: AxiosResponse<ApiResponse>) => {

      if (response.data.alerts) {
        const alerts = response.data.alerts.map((alert) => {
          const formattedTime = new Intl.DateTimeFormat("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date(alert.time));
          // Hapus kata "pukul" dari waktu yang diformat
          return {
            ...alert,
            time: formattedTime.replace("pukul", "- ").trim(),
          };
        });
        return alerts;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Handle errors appropriately, like rethrowing or handling locally
      throw error;
    });
};
