import axios, { AxiosResponse } from "axios";
import { Params } from "react-router-dom";

interface ApiResponse {
  videos: Video[];
}

export interface Video {
  id: string;
  url: string;
  created_at: string;
}

export const listVehicleVideos = (
  token: string,
  vehicle_id: string
): Promise<Video[]> => {
  return axios
    .get<ApiResponse>(
      `http://localhost:9000/api/v1/vehicles/${vehicle_id}/videos`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response: AxiosResponse<ApiResponse>) => {
      if (response.data.videos) {
        return response.data.videos;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Handle errors appropriately, like rethrowing or handling locally
      throw error;
    });
};

export const getVideosById = (
  token: string,
  vehicle_id: string,
  videoId: string
): Promise<Video> => {
  return axios
    .get<Video>(
      `http://localhost:9000/api/v1/vehicles/${vehicle_id}/videos/${videoId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response: AxiosResponse<Video>) => {
      console.log("API response:", response.data);
      if (response.data) {
        console.log("API response:", response.data);
        return response.data;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Handle errors appropriately, like rethrowing or handling locally
      throw error;
    });
};