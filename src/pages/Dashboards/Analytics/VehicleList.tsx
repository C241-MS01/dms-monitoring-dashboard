import { ChevronRight } from 'lucide-react';
import React from 'react'



const VehicleList = () =>{
    return (
      <div className="col-span-12 card 2xl:col-span-4">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
            <div className="2xl:col-span-12">
              <h6 className="text-15">Vehicle List</h6>
            </div>
          </div>
          <div className="item-list flex items-center px-2 border-b-2 py-3">
            <div className="py-2 grow">
              <h5 className="text-15">#TWT5015100365</h5>
            </div>
            <div className="p-2 bg-slate-200 dark:bg-slate-700 rounded-md">
              <ChevronRight className="size-5" />
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default VehicleList;
