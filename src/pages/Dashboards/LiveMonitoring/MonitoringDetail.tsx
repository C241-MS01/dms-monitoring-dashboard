import React from "react";
import { useEffect, useRef } from "react";
import mqtt from "mqtt";

const MonitoringDetail = () => {
  const imgRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const client = mqtt.connect("ws://34.101.43.219:9001");

    client.on("connect", () => {
      console.log("connected");
      client.subscribe("stream", (err) => {
        if (err) {
          console.error("Failed to subscribe to topic:", err);
          return;
        }
        console.log("subscribed to video topic");
      });
    });
    //client.publish("close_stream", streamId); // publish the stream id to notify the server to remove the stream id in the database
    client.on("message", (topic, message) => {
      if (imgRef.current) {
        imgRef.current.src = "data:image/jpeg;base64," + message.toString();
      }
    });

    // Cleanup function to disconnect from the MQTT broker when the component unmounts
    return () => {
      client.end();
    };
  }, []);
  return (
    <React.Fragment>
      <div className="xl:col-span-8 md:col-span-8">
        <div className="card">
          <div className="card-body">
            <h6 className="text-15 mb-4">Monitoring Detail</h6>
            <div className="flex justify-center mb-2">
              <img ref={imgRef} className="h-full w-auto" alt="Video Stream" />
            </div>
            <button
              type="submit"
              className="w-full text-white btn bg-red-500 border-red-500 hover:text-white hover:bg-red-600 hover:border-red-600 focus:text-white focus:bg-custom-600 focus:border-custom-600 focus:ring focus:ring-custom-100 active:text-white active:bg-custom-600 active:border-custom-600 active:ring active:ring-custom-100 dark:ring-custom-400/20"
            >
              Stop Stream
            </button>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MonitoringDetail;
