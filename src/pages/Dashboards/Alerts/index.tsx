import React from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import EmailPerformance from './AlertList';
import AlertDetail from './AlertDetails';

const EmailDashboard = () => {

    return (
        <React.Fragment>
            <BreadCrumb title='Alerts' pageTitle='Dashboards' />
            <div className="grid grid-cols-12 2xl:grid-cols-12 gap-x-5">
                <EmailPerformance />
                <AlertDetail/>
            </div>
        </React.Fragment>
    );
};

export default EmailDashboard;
