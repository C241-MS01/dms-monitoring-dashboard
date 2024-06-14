import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "Common/TableContainer";
import { Link, useParams } from "react-router-dom";
import {  Eye, } from "lucide-react";

import axios from "axios";
import authService, { User } from "helpers/auth.service";
import { Alert, historyAlerts } from "helpers/history.service";


const AlertHistory = () => {
  const param = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Alert[]>();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const user = authService.getCurrentUser();

    if (user && user.user && user.user.email) {
      setCurrentUser(user);
    }
  }, []);
  
  useEffect(() => {
    const fetchAlerts = async () => {
      if (currentUser && currentUser.token) {
        setLoading(true);
        setError(null);
        try {
          if (param.vehicleId && param.videoId) {
            const alerts = await historyAlerts(
              currentUser.token,
              param.vehicleId,
              param.videoId
            );
            console.log(alerts);
            setData(alerts);
          } else {
            setError("Vehicle ID is missing");
          }
        } catch (error) {
          setError("Error fetching Videos");
          console.error("Error fetching Videos:", error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchAlerts();
    console.log(data);
  }, [currentUser, param]);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);
  }, [loading, error, data]);

  const columns = useMemo(
    () => [
      // {
      //   header: "Alert Id",
      //   accessorKey: "alertId",
      //   enableColumnFilter: false,
      //   enableSorting: true,
      //   cell: (cell: any) => (
      //     <>
      //       <Link to="/apps-ecommerce-order-overview">
      //         {cell.row.original.alertId}
      //       </Link>
      //     </>
      //   ),
      // },
      {
        header: "Time",
        accessorKey: "time",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Video Id",
        accessorKey: "video_id",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Object",
        accessorKey: "object_detected",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Sleep Duration",
        accessorKey: "sleep_duration",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Yawning Duration",
        accessorKey: "yawning_duration",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Focus Duration",
        accessorKey: "focus_duration",
        enableColumnFilter: false,
        enableSorting: true,
      },

      // {
      //   header: "Action",
      //   enableColumnFilter: false,
      //   enableSorting: true,

      //   cell: (cell: any) => (
      //     <div className="flex justify-center">
      //       <Link
      //         to={`/alerts/${cell.row.original.alertId}`}
      //         className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/20"
      //       >
      //         <Eye className="size-4" />
      //       </Link>
      //     </div>
      //   ),
      // },
    ],
    []
  );

  return (
    <div className="order-last col-span-12 card 2xl:col-span-12">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
            <div className="2xl:col-span-3">
              <h6 className="text-15">History Alerts</h6>
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
              data={data || []}
              customPageSize={7}
              divclassName="overflow-x-auto"
              tableclassName="w-full whitespace-nowrap"
              theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
              thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
              tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
              PaginationClassName="grid grid-cols-12 gap-y-3 items-center mt-5 md:flex-row"
            />
          )}
        </div>
      </div>
  );
};

export default AlertHistory;
