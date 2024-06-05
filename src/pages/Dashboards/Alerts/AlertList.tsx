import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "Common/TableContainer";
import { ChevronRight, Search } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";



const AlertList = () => {
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

  // Search Data
  const filterSearchData = async  (e: any) => {
    const search = e.target.value;
    const response = await axios
      .get(
        `http://localhost:8080/bwa-asset-management/alert/search.php?search=${search}`
      )
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

  const columns = useMemo(
    () => [
      {
        header: "Time",
        accessorKey: "timestamp",
        enableColumnFilter: false,
      },
      {
        header: " ",
        enableColumnFilter: false,
        enableSorting: true,
        cell: (cell: any) => (
          <div className="flex justify-end">
            <Link
              to={`/alert/${cell.row.original.alertId}/details`}
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
      <div className="col-span-12 card md:col-span-6 xl:col-span-6 2xl:col-span-6 ">
        <div className="card-body">
          <div className="grid items-center grid-cols-1 gap-3 mb-5 xl:grid-cols-12">
            <div className="xl:col-span-3">
              <h6 className="text-15">Alerts</h6>
            </div>
            <div className="xl:col-span-3 xl:col-start-10">
              <div className="flex gap-3">
                <div className="relative grow">
                  <input
                    type="text"
                    className="ltr:pl-8 rtl:pr-8 search form-input border-slate-200 dark:border-zink-500 focus:outline-none focus:border-custom-500 disabled:bg-slate-100 dark:disabled:bg-zink-600 disabled:border-slate-300 dark:disabled:border-zink-500 dark:disabled:text-zink-200 disabled:text-slate-500 dark:text-zink-100 dark:bg-zink-700 dark:focus:border-custom-800 placeholder:text-slate-400 dark:placeholder:text-zink-200"
                    placeholder="Search for ..."
                    autoComplete="off"
                    onChange={(e) => filterSearchData(e)}
                  />
                  <Search className="inline-block size-4 absolute ltr:left-2.5 rtl:right-2.5 top-2.5 text-slate-500 dark:text-zink-200 fill-slate-100 dark:fill-zink-600"></Search>
                </div>
              </div>
            </div>
          </div>

          <TableContainer
            isPagination={true}
            columns={columns || []}
            data={data || []}
            customPageSize={10
            }
            divclassName="-mx-5 overflow-x-auto"
            tableclassName="w-full whitespace-nowrap"
            theadclassName="ltr:text-left rtl:text-right bg-slate-100 text-slate-500 dark:text-zink-200 dark:bg-zink-600"
            thclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 font-semibold border-y border-slate-200 dark:border-zink-500"
            tdclassName="px-3.5 py-2.5 first:pl-5 last:pr-5 border-y border-slate-200 dark:border-zink-500"
            PaginationClassName="grid grid-cols-12 gap-y-3 items-center mt-5 md:flex-row"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default AlertList;
