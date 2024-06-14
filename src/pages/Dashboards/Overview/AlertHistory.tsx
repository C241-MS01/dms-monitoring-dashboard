import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "Common/TableContainer";
import { Link } from "react-router-dom";
import {  Eye, } from "lucide-react";

import axios from "axios";


const ProductsOrders = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios
        .get("http://localhost:8080/bwa-asset-management/alert/read.php")
        .then((res) => {
          setData(res.data);
          setLoading(false);
          console.log(res.data);
        })
        .catch((err) => {
          setError(err);
        });
      return response;
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Loading:", loading);
    console.log("Error:", error);
    console.log("Data:", data);
  }, [loading, error, data]);

  const columns = useMemo(
    () => [
      {
        header: "Alert Id",
        accessorKey: "alertId",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <>
            <Link to="/apps-ecommerce-order-overview">
              {cell.row.original.alertId}
            </Link>
          </>
        ),
      },
      {
        header: "Time",
        accessorKey: "timestamp",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Vehicle Id",
        accessorKey: "vehicleId",
        enableColumnFilter: false,
        enableSorting: true,
      },
      {
        header: "Status",
        accessorKey: "status",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <>
            {cell.row.original.status === "Delivered" ? (
              <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-green-100 border-green-200 text-green-500 dark:bg-green-500/20 dark:border-green-500/20">
                {cell.row.original.status}
              </span>
            ) : cell.row.original.status === "Mengantuk" ? (
              <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-purple-100 border-purple-200 text-purple-500 dark:bg-purple-500/20 dark:border-purple-500/20">
                {cell.row.original.status}
              </span>
            ) : cell.row.original.status === "New" ? (
              <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-sky-100 border-sky-200 text-sky-500 dark:bg-sky-500/20 dark:border-sky-500/20">
                {cell.row.original.status}
              </span>
            ) : (
              <span className="delivery_status px-2.5 py-0.5 text-xs inline-block font-medium rounded border bg-yellow-100 border-yellow-200 text-yellow-500 dark:bg-yellow-500/20 dark:border-yellow-500/20">
                {cell.row.original.status}
              </span>
            )}
          </>
        ),
      },
      {
        header: "Action",
        enableColumnFilter: false,
        enableSorting: true,

        cell: (cell: any) => (
          <div className="flex justify-center">
            <Link
              to={`/alerts/${cell.row.original.alertId}`}
              className="flex items-center justify-center size-8 transition-all duration-200 ease-linear rounded-md bg-slate-100 dark:bg-zink-600 dark:text-zink-200 text-slate-500 hover:text-custom-500 dark:hover:text-custom-500 hover:bg-custom-100 dark:hover:bg-custom-500/20"
            >
              <Eye className="size-4" />
            </Link>
          </div>
        ),
      },
    ],
    []
  );

  return (
    <div className="order-last col-span-12 card 2xl:col-span-12">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
            <div className="2xl:col-span-3">
              <h6 className="text-15">Recent Alerts</h6>
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

export default ProductsOrders;
