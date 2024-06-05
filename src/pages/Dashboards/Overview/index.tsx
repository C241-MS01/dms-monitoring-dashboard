import React, { useEffect } from 'react';
import BreadCrumb from 'Common/BreadCrumb';
import Widgets from './Widgets';
import Interaction from "./Interaction";

import ProductsOrders from './ProductsOrders';


import { useNavigate } from 'react-router-dom';


const Ecommerce = () => {

    const navigate = useNavigate();
    useEffect(() => navigate("/dashboard"), [navigate]);

    return (
      <React.Fragment>
        <BreadCrumb title="Overview" pageTitle="Dashboards" />
        <div className="grid grid-cols-12 gap-x-5">

          <div className="col-span-12 2xl:col-span-4">
            <div className="grid grid-cols-12 gap-x-5 gap-y-0 h-full">
              <Widgets />
            </div>
          </div>

          <Interaction />
          <ProductsOrders />
        </div>
      </React.Fragment>
    );
};

export default Ecommerce;
