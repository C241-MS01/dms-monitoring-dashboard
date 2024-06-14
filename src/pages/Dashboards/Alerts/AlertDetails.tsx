/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Map from "Common/Components/Map";
import authService, { User } from "helpers/auth.service";
import { Video, getVideosById } from "helpers/video.service";


const AlertDetail = () => {
  const param = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Video>();
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const type = "video/mp4";

  useEffect(() => {
    const user = authService.getCurrentUser();
    
    console.log(user);

    if (user && user.user && user.user.email) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
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
            console.log(listVideos);
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
    console.log(data);
  }, [currentUser, param]);

  return (
    <div className="xl:col-span-6 md:col-span-6 2xl:col-span-4">
      <div className="card">
        <div className="card-body">
          <h6 className="text-15 mb-4">{param.videoId}</h6>
          <div className="flex justify-center mb-4">
            <div
              className="relative"
              style={{
                width: "100%",
                maxWidth: "560px",
                paddingBottom: "20px",
              }}
            >
              <video controls width="600">
                <source src={data?.url} type={type} />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
          <p className="text-base font-light">Time</p>
          <h6 className="font-bold text-lg ml-2 mb-3">{data?.created_at}</h6>
          <p className="text-base font-light">Video URL</p>
          <a href={data?.url} target="blank" className=" text-base ml-2 mb-3">
            {data?.url}
          </a>
        </div>
      </div>
    </div>
  );
};
export default AlertDetail;
