import axios, { AxiosResponse } from "axios";

const API_URL = process.env.REACT_APP_API_URL;
interface ApiResponse {
  videos: Video[];
}

export interface Video {
  created_at: string;
  id: string;
  url: string;
}

export const listVehicleVideos = (
  token: string,
  vehicle_id: string
): Promise<Video[]> => {
  return axios
    .get<ApiResponse>(
      API_URL+`/vehicles/${vehicle_id}/videos`,
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
    .get<Video>(API_URL + `/vehicles/${vehicle_id}/videos/${videoId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response: AxiosResponse<Video>) => {
      if (response.data) {
        const formattedVideo = {
          ...response.data,
          created_at: new Intl.DateTimeFormat("id-ID", {
            year: "numeric",
            month: "long",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
          }).format(new Date(response.data.created_at)),
        };
        // Hapus kata "pukul" dari waktu yang diformat
        formattedVideo.created_at = formattedVideo.created_at
          .replace("pukul", "- ")
          .trim();
        return formattedVideo;
      } else {
        throw new Error("Invalid response format");
      }
    })
    .catch((error) => {
      // Handle errors appropriately, like rethrowing or handling locally
      throw error;
    });
};