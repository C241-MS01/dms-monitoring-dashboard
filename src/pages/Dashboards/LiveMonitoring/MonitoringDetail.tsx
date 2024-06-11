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
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default MonitoringDetail;
