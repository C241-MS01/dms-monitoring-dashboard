import React from 'react';
import { Package, PackageX, Truck, Wallet2 } from 'lucide-react';
import CountUp from 'react-countup';

const Widgets = () => {
    return (
      <React.Fragment>
        {/* <div className="col-span-12 card md:col-span-12 lg:col-span-12 2xl:col-span-4"></div> */}
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-6">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto rounded-full size-14 bg-custom-100 text-custom-500 dark:bg-custom-500/20">
              <Wallet2 />
            </div>
            <h5 className="mt-4 mb-2">
              <CountUp end={20} className="counter-value text-si" />
              <span className="text-slate-500 dark:text-zink-200 text-sm">
                /25
              </span>
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Alerted Driver</p>
          </div>
        </div>
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-6">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-purple-500 bg-purple-100 rounded-full size-14 dark:bg-purple-500/20">
              <Package />
            </div>
            <h5 className="mt-4 mb-2 text-red-600 dark:text-red-600">
              <CountUp end={13461} className="counter-value" />
            </h5>
            <p className=" text-slate-500 dark:text-zink-200">Total Alert</p>
          </div>
        </div>
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-6">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-green-500 bg-green-100 rounded-full size-14 dark:bg-green-500/20">
              <Truck />
            </div>
            <h5 className="mt-4 mb-2">
              <CountUp end={554.5} decimals={2} className="counter-value" /> KM
            </h5>
            <p className="text-slate-500 dark:text-zink-200">
              Av. Travel Distance
            </p>
          </div>
        </div>
        <div className="col-span-12 card md:col-span-6 lg:col-span-3 2xl:col-span-6">
          <div className="text-center card-body">
            <div className="flex items-center justify-center mx-auto text-red-500 bg-red-100 rounded-full size-14 dark:bg-red-500/20">
              <PackageX />
            </div>
            <h5 className="mt-4 mb-2  text-red-600 dark:text-red-600">
              +
              <CountUp end={22} className="counter-value" />%
            </h5>
            <p className="text-slate-500 dark:text-zink-200">Warning Level</p>
          </div>
        </div>
      </React.Fragment>
    );
};

export default Widgets;
