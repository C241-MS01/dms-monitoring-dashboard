import React from "react";
import BreadCrumb from "Common/BreadCrumb";
import Widgets from "./Widgets";

import Interaction from "./Interaction";
import UserDevice from "./UserDevice";
import Satisfaction from "./Satisfaction";
import DailyVisit from "./DailyVisit";
import Reports from "./Reports";
import MonthlyCampaign from "./MonthlyCampaign";
import Subscription from "./Subscription";
import TrafficSource from "./TrafficSource";
import VehicleList from "./VehicleList";
import MonitoringDetail from "./MonitoringDetail";
import ProductsStatistics from "./ProductsStatistics";
import { imageOverlay } from "leaflet";

const Analytics = () => {
  return (
    <React.Fragment>
      <BreadCrumb title="Live Monitoring" pageTitle="Dashboards" />
      <div className="grid grid-cols-12 gap-x-5">
        {/* <Widgets /> */}
        {/* <Interaction /> */}
        <VehicleList/>
        <MonitoringDetail/>
        {/* <UserDevice />
        <Satisfaction />
        <DailyVisit /> */}
        {/* <ProductsStatistics /> */}
        {/* <Reports />
        <MonthlyCampaign />
        <Subscription />
        <TrafficSource /> */}
      </div>
    </React.Fragment>
  );
};

export default Analytics;
