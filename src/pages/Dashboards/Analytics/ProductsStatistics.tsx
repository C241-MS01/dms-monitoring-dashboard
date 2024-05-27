import TableContainer from 'Common/TableContainer';
import React, { useMemo, useState } from 'react';
import { Link } from "react-router-dom";
import { ProductsStatisticsData } from "Common/data";
import { CheckCircle2, Search, XCircle } from 'lucide-react';
import filterDataBySearch from 'Common/filterDataBySearch';

const ProductsStatistics = () => {

    const [data, setData] = useState(ProductsStatisticsData);

    // Search Data
    const filterSearchData = (e: any) => {
        const search = e.target.value;
        const keysToSearch = ['productName', 'status'];
        filterDataBySearch(ProductsStatisticsData, search, keysToSearch, setData);
    };

    const columns = useMemo(
      () => [
        {
          header: "Alert",
          accessorKey: "productName",
          enableColumnFilter: false,
          enableSorting: true,
          cell: (cell: any) => (
            <Link
              to={"/alert/" + cell.getValue()}
              className="flex items-center gap-2"
            >
              <h6 className="product_name">{cell.getValue()}</h6>
            </Link>
          ),
        },
        {
          header: "Vehicle ID",
          accessorKey: "price",
          enableColumnFilter: false,
          enableSorting: true,
        },
        {
          header: "Violation",
          accessorKey: "income",
          enableColumnFilter: false,
          enableSorting: true,
        },
        // {
        //   header: "Sales",
        //   accessorKey: "sales",
        //   enableColumnFilter: false,
        //   enableSorting: true,
        // },
        // {
        //   header: "View",
        //   accessorKey: "view",
        //   enableColumnFilter: false,
        //   enableSorting: true,
        // },
        // {
        //   header: "Click",
        //   accessorKey: "click",
        //   enableColumnFilter: false,
        //   enableSorting: true,
        // },
        // {
        //   header: "Click (%)",
        //   accessorKey: "clickPercentage",
        //   enableColumnFilter: false,
        //   enableSorting: true,
        // },
        {
          header: "Status",
          accessorKey: "status",
          enableColumnFilter: false,
          enableSorting: true,
          cell: (cell: any) => (
            <>
              {cell.row.original.status === "Active" ? (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-green-100 border-transparent text-green-500 dark:bg-green-500/20 dark:border-transparent">
                  <CheckCircle2 className="size-3 ltr:mr-1 rtl:ml-1"></CheckCircle2>
                  {cell.row.original.status}
                </span>
              ) : (
                <span className="inline-flex items-center px-2.5 py-0.5 text-xs font-medium rounded border bg-red-100 border-transparent text-red-500 dark:bg-red-500/20 dark:border-transparent">
                  <XCircle className="size-3 ltr:mr-1 rtl:ml-1"></XCircle>
                  {cell.row.original.status}
                </span>
              )}
            </>
          ),
        },
      ],
      []
    );
    return (
        <div className="order-11 col-span-12 2xl:order-1 card 2xl:col-span-12">
                <div className="card-body">
                    <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
                        <div className="xl:col-span-3">
                            <h6 className="text-15">Recent Alerts</h6>
                        </div>
                        
                    </div>
                    <TableContainer
                        isPagination={true}
                        columns={(columns || [])}
                        data={(data || [])}
                        customPageSize={10}
                        divclassName="-mx-5 overflow-x-auto"
                        tableclassName="w-full whitespace-nowrap"
                        theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
                        thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500 w-10"
                        tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
                        PaginationClassName="flex flex-col items-center mt-5 md:flex-row"
                    />
                </div>
            </div>
    );
};

export default ProductsStatistics;
