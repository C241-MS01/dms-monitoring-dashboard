/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "Common/Components/Map";
import authService, { User } from "helpers/auth.service";
import { Video, getVideosById } from "helpers/video.service";
import { Download } from "lucide-react";

const AlertDetail = () => {
  const param = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Video | null>(null);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const type = "video/mp4";
  const [video, setVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user && user.user && user.user.email) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    setData(null);
    const fetchVideolist = async () => {
      if (currentUser && currentUser.token) {
        setLoading(true);
        setError(null);

        try {
          if (param.vehicleId && param.videoId) {
            const listVideos = await getVideosById(
              currentUser.token,
              param.vehicleId,
              param.videoId
            );

            setData(listVideos);
          } else {
            setError("Vehicle ID is missing");
          }
        } catch (error) {
          setError("Error fetching Videos");
          console.error("Error fetching Videos:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchVideolist();

  }, [currentUser, param]);

   useEffect(() => {
     if (data) {
       setVideo(data.url);
     }
   }, [data]);

 useEffect(() => {
   if (videoRef.current && video) {
     videoRef.current.src = video;
     videoRef.current.load(); // Reset video source and reload
   }
 }, [video, data]);

  // Handle Vidio Download
  const downloadHandler = async () => {
    // Check if the URL is defined
    if (!data?.url) {
      console.error("File URL is undefined");
      return;
    }

    // Define a file name for the download
    const fileName = `${data.id}.mp4`;

    try {
      // Fetch the file as a blob
      const response = await fetch(data.url);
      const blob = await response.blob();

      // Create a temporary link element to trigger the download
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();

      // Clean up the URL object
      URL.revokeObjectURL(link.href);
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the file:", error);
    }
  };

  return (
    <div className="xl:col-span-4 md:col-span-12 2xl:col-span-4">
      <div className="card">
        <div className="card-body">
          <h6 className="text-15 mb-4">
            {param.videoId || "No video selected"}
          </h6>
          {param.videoId && video ? (
            <>
              {loading ? (
                <p>Loading ...</p>
              ) : (
                <>
                  <div className="flex justify-center mb-4">
                    <div
                      className="relative"
                      style={{
                        width: "100%",
                        maxWidth: "560px",
                        paddingBottom: "20px",
                      }}
                    >
                      <video width="600" ref={videoRef} controls>
                        {/* {data?.url && <source src={video} type={type} />}
                        Your browser does not support the video tag. */}
                      </video>
                    </div>
                  </div>
                  <p className="text-base font-light">Time</p>
                  <h6 className="font-bold text-lg ml-2 mb-3">
                    {data?.created_at}
                  </h6>

                  <button
                    type="submit"
                    onClick={downloadHandler}
                    className="w-full flex items-center justify-center text-white btn bg-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 space-x-2"
                  >
                    <span>Download Video</span>
                    <Download />
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="flex justify-center items-center h-10">
              <p className="font-bold">Please select a video first</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default AlertDetail;
