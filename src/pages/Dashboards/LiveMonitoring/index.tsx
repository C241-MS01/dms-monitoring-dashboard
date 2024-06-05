import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import VehicleList from "./VehicleList";
import MonitoringDetail from "./MonitoringDetail";

const Analytics = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Live Monitoring" pageTitle="Dashboards" />
      <div className="grid grid-cols-12 gap-x-5">
        <VehicleList/>
        <MonitoringDetail/>
      </div>
    </React.Fragment>
  );
};

export default Analytics;
