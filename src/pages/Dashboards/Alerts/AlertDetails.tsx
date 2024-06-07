/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Map from "Common/Components/Map";


const AlertDetail = () => {
  const param = useParams();

  return (
    <div className="xl:col-span-6 md:col-span-6">
      <div className="card">
        <div className="card-body">
          <h6 className="text-15 mb-4">{param.alert}</h6>
          <div className="flex justify-center mb-4">
            <div
              className="relative"
              style={{ width: "100%", maxWidth: "560px", paddingBottom: "75%" }}
            >
              <img
                className="absolute inset-0 w-full h-full rounded-lg object-cover"
                src="https://ritase.com/wp-content/uploads/2022/02/shutterstock_1801689061-min-1080x675.jpg"
                alt="Placeholder Image"
                title="Embedded Image"
              />
            </div>
          </div>
          <p className="text-base font-light">Time</p>
          <h6 className="font-bold text-lg ml-2 mb-3">
            2023-12-20 14:15:30.123{" "}
          </h6>
          <p className="text-base font-light">Vehicle ID</p>
          <h6 className="font-bold text-lg ml-2 mb-3">VEH12362 </h6>
          <p className="text-base font-light">Status</p>
          <h6 className="font-bold text-lg ml-2 mb-3">Mengantuk </h6>
          <p className="text-base font-light">Location</p>
          <h6 className="font-bold text-lg ml-2 mb-3">
            -6.214621, 106.845128{" "}
          </h6>
          <Map></Map>
        </div>
      </div>
    </div>
  );
};
export default AlertDetail;
