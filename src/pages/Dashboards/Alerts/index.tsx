import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import AlertList from './VideoList';
import AlertDetail from './AlertDetails';
import VehicleList from './VehicleList';
import AlertHistory from './AlertHistory';

const EmailDashboard = () => {

    return (
      <React.Fragment>
        <BreadCrumb title="Alerts" pageTitle="Dashboards" />
        <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
          <AlertList />
          <AlertDetail />
          <VehicleList/>
          <AlertHistory/>
        </div>
      </React.Fragment>
    );
};

export default EmailDashboard;
