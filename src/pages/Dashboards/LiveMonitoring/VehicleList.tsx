import { ChevronRight } from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "Common/TableContainer";
import { Link } from "react-router-dom";

import axios from "axios";
import authService, { User } from "helpers/auth.service";
import { Vehicle, listVehicles } from "helpers/vehicle.service";

const VehicleList = () => {
  // const [data, setData] = useState<Vehicle[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [currentUser, setCurrentUser] = useState<User | null>(null);
  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user && user.user && user.user.email) {
      setCurrentUser(user);
    }
  }, []);

  useEffect(() => {
    const fetchAndSetVehicles = async () => {
      if (currentUser && currentUser.token) {
        setLoading(true);
        setError(null);
        try {
          const vehicleList = await listVehicles(currentUser.token);
          setVehicles(vehicleList);
        } catch (error) {
          setError("Error fetching vehicles");
          console.error("Error fetching vehicles:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAndSetVehicles();
  }, [currentUser]);

  const columns = useMemo(
    () => [
      {
        header: "Vehicle Id",
        accessorKey: "vehicleId",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <Link to={`/live-monitoring/${cell.row.original.id}`}>
            {cell.row.original.id}
          </Link>
        ),
      },
      {
        header: " ",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <div className="flex justify-end">
            <Link
              to={`/live-monitoring/${cell.row.original.id}`}
              className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/20"
            >
              <ChevronRight className="size-4" />
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="order-first col-span-12 card md:col-span-4 xl:col-span-4 2xl:col-span-4">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
            <div className="2xl:col-span-12">
              <h6 className="text-15">Vehicle</h6>
            </div>
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error: {error}</div>
          ) : (
            <TableContainer
              isPagination={true}
              columns={columns || []}
              data={vehicles || []}
              customPageSize={5}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
              PaginationClassName="grid grid-col-12 items-center gap-y-2 mt-5 md:flex-row"
            />
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default VehicleList;
