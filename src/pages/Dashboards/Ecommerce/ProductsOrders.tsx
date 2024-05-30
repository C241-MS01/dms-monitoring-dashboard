import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from 'Common/TableContainer';
import { ProductOrdersData } from "Common/data";
import { Link } from 'react-router-dom';
import { MoreHorizontal, Search, Eye, FileEdit, Trash2 } from 'lucide-react';
import { Dropdown } from 'Common/Components/Dropdown';
import { Alert, fetchAlerts } from "helpers/AlertApi";
import filterDataBySearch from 'Common/filterDataBySearch';

const AlertsData = [
  {
    alertId: "85d4c62",
    time: "2024-05-27T12:34:56Z",
    vehicleId: "481026dc58d15f327b5b7",
    status: "Mengantuk",
  },
  {
    alertId: "9f8d3a2",
    time: "2024-05-27T13:22:10Z",
    vehicleId: "af3206bc58d15f327b1a3",
    status: "Merokok",
  },
  {
    alertId: "75b1d92",
    time: "2024-05-27T14:45:23Z",
    vehicleId: "3f5626ac58d15f327c6d8",
    status: "Tertidur",
  },
  {
    alertId: "6c3e7b1",
    time: "2024-05-27T15:55:44Z",
    vehicleId: "1b1236fc58d15f327d9b1",
    status: "Mengantuk",
  },
  {
    alertId: "12e4a83",
    time: "2024-05-27T16:11:22Z",
    vehicleId: "c8b236dc58d15f327e7b3",
    status: "Merokok",
  },
  {
    alertId: "8d7c9a5",
    time: "2024-05-27T17:33:55Z",
    vehicleId: "4f5626cc58d15f327f2a6",
    status: "Tertidur",
  },
  {
    alertId: "4a6b8d2",
    time: "2024-05-27T18:44:18Z",
    vehicleId: "2a3426bc58d15f328a5b7",
    status: "Mengantuk",
  },
  {
    alertId: "3c5e9b1",
    time: "2024-05-27T19:52:33Z",
    vehicleId: "9d5426fc58d15f328b6c1",
    status: "Merokok",
  },
  {
    alertId: "9a2d4b6",
    time: "2024-05-27T20:11:47Z",
    vehicleId: "8e7626dc58d15f328c7d3",
    status: "Tertidur",
  },
  {
    alertId: "5b8e6c7",
    time: "2024-05-27T21:35:29Z",
    vehicleId: "7f9826ec58d15f328d8e5",
    status: "Mengantuk",
  },
];

const ProductsOrders = () => {

    const [data, setData] = useState<Alert[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      // const getVehicles = async () => {
      //   setLoading(true);
      //   try {
      //     const alertsData = await fetchAlerts();
      //     console.log("Fetched vehicles:", alertsData); // Debugging log
      //     if (alertsData.length > 0) {
      //       setData(alertsData);
      //       setError(null);
      //     } else {
      //       setError("No vehicles found");
      //     }
      //   } catch (err) {
      //     setError("Failed to fetch vehicles");
      //   }
      //   setLoading(false);
      // };

      // getVehicles();
    }, []);

    useEffect(() => {
      console.log("Loading:", loading);
      console.log("Error:", error);
      console.log("Data:", data);
    }, [loading, error, data]);
    // Search Data
    // const filterSearchData = (e: any) => {
    //     const search = e.target.value;
    //     const keysToSearch = ['orderId', 'customerName', 'location', 'orderDate', 'payments', 'quantity', 'status'];
    //     filterDataBySearch(ProductOrdersData, search, keysToSearch, setData);
    // };

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
            <>
              <Dropdown className="relative">
                <Dropdown.Trigger
                  id="orderAction5"
                  data-bs-toggle="dropdown"
                  className="flex items-center justify-center size-[30px] dropdown-toggle p-0 text-slate-500 btn bg-slate-100 hover:text-white hover:bg-slate-600 focus:text-white focus:bg-slate-600 focus:ring focus:ring-slate-100 active:text-white active:bg-slate-600 active:ring active:ring-slate-100 dark:bg-slate-500/20 dark:text-slate-400 dark:hover:bg-slate-500 dark:hover:text-white dark:focus:bg-slate-500 dark:focus:text-white dark:active:bg-slate-500 dark:active:text-white dark:ring-slate-400/20"
                >
                  <MoreHorizontal className="size-3"></MoreHorizontal>
                </Dropdown.Trigger>
                <Dropdown.Content
                  placement={cell.row.index ? "top-end" : "right-end"}
                  className="absolute z-50 py-2 mt-1 ltr:text-left rtl:text-right list-none bg-white rounded-md shadow-md dropdown-menu min-w-[10rem] dark:bg-zink-600"
                  aria-labelledby="orderAction5"
                >
                  <li>
                    <Link
                      className="block px-4 py-1.5 text-base transition-all duration-200 ease-linear text-slate-600 dropdown-item hover:bg-slate-100 hover:text-slate-500 focus:bg-slate-100 focus:text-slate-500 dark:text-zink-100 dark:hover:bg-zink-500 dark:hover:text-zink-200 dark:focus:bg-zink-500 dark:focus:text-zink-200"
                      to={`/alerts/${cell.row.original.alertId}`}
                    >
                      <Eye className="inline-block size-3 ltr:mr-1 rtl:ml-1" />{" "}
                      <span className="align-middle">Overview</span>
                    </Link>
                  </li>
                </Dropdown.Content>
              </Dropdown>
            </>
          ),
        },
      ],
      []
    );

    return (
      <React.Fragment>
        <div className="order-last col-span-12 card 2xl:col-span-12">
          <div className="card-body">
            <div className="grid items-center grid-cols-1 gap-3 mb-5 2xl:grid-cols-12">
              <div className="2xl:col-span-3">
                <h6 className="text-15">Recent Alerts</h6>
              </div>
            </div>
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
              PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
            />
          </div>
        </div>
      </React.Fragment>
    );
};

export default ProductsOrders;
