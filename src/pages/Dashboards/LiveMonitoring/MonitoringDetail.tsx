import React, { useState, useEffect, useRef } from "react";
import mqtt, { MqttClient } from "mqtt";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import placeholder from "assets/images/Frame 289216.png";
import {  APIProvider, AdvancedMarker, Map } from "@vis.gl/react-google-maps";
// import { connect } from "react-redux";

const MonitoringDetail = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  const mapDivRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(
    null
  );

  const [client, setClient] = useState<MqttClient | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const param = useParams();
  const navigate = useNavigate();
  const [location, setLocation] = useState({ lat: 0, lng: 0 });

  useEffect(() => {

  

    const mqqtclient = mqtt.connect("wss://mqtt.bagashiz.xyz");

    mqqtclient.on("connect", () => {

      setClient(mqqtclient);

      // Subscribe to both topics
      mqqtclient.subscribe(`base64/${param.vehicle}`, (err) => {
        if (err) {
          console.error("Failed to subscribe to video topic:", err);
          return;
        }
        console.log("subscribed to video topic");
      });

      mqqtclient.subscribe(`location/${param.vehicle}`, (err) => {
        if (err) {
          console.error("Failed to subscribe to location topic:", err);
          return;
        }
        console.log("subscribed to location topic");
      });
    });

    mqqtclient.on("message", (topic, message) => {
      if (topic.startsWith("base64/")) {
        if (imgRef.current) {
          imgRef.current.src = "data:image/jpeg;base64," + message.toString();
          setIsButtonDisabled(false);
        }
      } else if (topic.startsWith("location/")) {
        const { latitude, longitude } = JSON.parse(message.toString());
        setLocation({ lat: latitude, lng: longitude });
      }
    });

    return () => {
      mqqtclient.end();
    };

  }, [param.vehicle]);


  

  const stopStream = () => {
    if (client && param.vehicle) {
      client.publish(`close_stream`, param.vehicle, (err) => {
        if (err) {
          console.error("Publish error: ", err);
        } else {

          setIsButtonDisabled(true);
        }
      });
    }
    navigate("/live-monitoring");
  };
  

  return (
    <div className="xl:col-span-8 md:col-span-8">
      <div className="card">
        <div className="card-body">
          <h6 className="text-15 mb-4">Monitoring Detail</h6>
          <div className="flex justify-center mb-2">
            {param.vehicle ? (
              <img ref={imgRef} className="h-full w-auto" alt="Video Stream" />
            ) : (
              <img src={placeholder} alt="" />
            )}
          </div>
          <button
            type="submit"
            onClick={stopStream}
            disabled={isButtonDisabled}
            className={`w-full text-white btn bg-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20 ${
              isButtonDisabled && "opacity-50 cursor-not-allowed"
            }`}
          >
            Stop Stream
          </button>
          <p>
            lat {location.lat} lng: {location.lng}
          </p>
          <APIProvider apiKey={process.env.REACT_APP_MAPS_API_KEY as string}>
            <Map
              style={{ width: "100%", height: "400px" }}
              defaultZoom={9}
              defaultCenter={location}
              mapId={process.env.REACT_APP_MAPS_ID}
            >
              <AdvancedMarker position={location}></AdvancedMarker>
            </Map>
          </APIProvider>
        </div>
      </div>
    </div>
  );
};

export default MonitoringDetail;
