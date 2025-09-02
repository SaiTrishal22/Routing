import { useQuery } from "@tanstack/react-query";
import { fetchCasesData } from "@/api/cases/fetch";
import {
  useReactTable,
  createColumnHelper,
  getCoreRowModel,
  getPaginationRowModel,
  flexRender,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useRouter, useNavigate } from "@tanstack/react-router"; // Combined import
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
} from "../ui/select";
import { Input } from "../ui/input";


type CaseStageDetail = {
  title: string;
  status: string;
};

type CaseStageContainer = {
  stages: CaseStageDetail[];
};

type CaseIssue = {
  issue: string;
};

type Advocate = {
  first_name: string | null;
  last_name: string | null;
};

type CaseRecord = {
  id: number;
  temp_id: string;
  opp_first_name: string;
  opp_last_name: string;
  case_issue: CaseIssue;
  advocate: Advocate | null;
  case_stages: CaseStageContainer[];
  next_hearing_date: string | null;
};

function Projects() {
  const router = useRouter();
  const navigate = useNavigate();


  const searchParams = new URLSearchParams(router.history.location.search);

  const initialPageIndex = parseInt(searchParams.get('page') || '1') - 1;
  const initialPageSize = parseInt(searchParams.get('size') || '15');
  const initialSearch = searchParams.get('search') || '';

  const [pagination, setPagination] = useState({
    pageIndex: initialPageIndex,
    pageSize: initialPageSize,
  });


  const [searchName, setSearchName] = useState(initialSearch);
  const [debouncedSearch, setDebouncedSearch] = useState(initialSearch);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchName);
    }, 400);

    return () => {
      clearTimeout(handler);
    };
  }, [searchName]);


  const { data, isLoading, isError } = useQuery({
    queryKey: ["cases", pagination.pageIndex, pagination.pageSize, debouncedSearch],
    queryFn: async () => {
      const queryParams = {
        page: pagination.pageIndex + 1,
        size: pagination.pageSize,
        search: debouncedSearch
      };
      const res = await fetchCasesData({ ...queryParams });

      navigate({
        to: "/projects",
        search: {
          page: queryParams.page,
          size: queryParams.size,
          search: queryParams.search,
        },
        replace: true,
      });
      return res;
    },
  });

  const casesData = data?.data?.records || [];
  const totalPageCount = data?.data?.pagination_info?.total_pages || -1;
  const columnHelper = createColumnHelper<CaseRecord>();
  const columns = [
    columnHelper.accessor("temp_id", {
      header: "Case ID",
      cell: (info) => info.getValue() ?? "N/A",
    }),
    columnHelper.accessor("opp_first_name", {
      header: "Case",
      cell: (info) =>
        `${info.row.original.opp_first_name} ${info.row.original.opp_last_name}`,
    }),
    columnHelper.accessor("case_issue", {
      header: "Issue",
      cell: (info) => info.getValue().issue ?? "N/A",
    }),
    columnHelper.accessor("advocate", {
      header: "Advocate Name",
      cell: (info) =>
        `${info.getValue()?.first_name || ""} ${
          info.getValue()?.last_name || ""
        }`.trim() || "Not Assigned",
    }),
    columnHelper.accessor("case_stages", {
      header: "Status",
      cell: (info) => {
        const currentStage = info.getValue()?.[0]?.stages?.find(
          (stage) => stage.status === "progress"
        );
        return currentStage?.title || "N/A";
      },
    }),
    columnHelper.accessor("next_hearing_date", {
      header: "Next Hearing",
      cell: (info) => {
        const dateString = info.getValue();
        if (!dateString) return "--";

        const date = new Date(dateString);
        const monthNames = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
        const day = date.getDate();
        const month = monthNames[date.getMonth()];
        const year = date.getFullYear();
        return `${day} ${month} ${year}`;
      },
    }),
  ];

  const table = useReactTable({
    columns,
    data: casesData,
    pageCount: totalPageCount,
    state: { pagination },
    onPaginationChange: setPagination,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  if (isLoading) {
    return <div>Loading cases...</div>;
  }

  if (isError) {
    return <div>Error fetching data. Please try again later.</div>;
  }
   
  

  const handlePageSizeChange = (value: string) => {
    table.setPageIndex(0);
    table.setPageSize(Number(value));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchName(e.target.value);

    table.setPageIndex(0);
  };

  const handleGoToPageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const page = Number(e.target.value) - 1;
    if (!isNaN(page) && page >= 0 && page < totalPageCount) {
        table.setPageIndex(page);
    }
  };
  
  return (
    <>
      <div className="mb-4">
        <Input
          value={searchName}
          onChange={handleSearch}
          placeholder="Search cases..."
          className="h-8 w-64 px-2 text-sm rounded-md border border-gray-300 focus:ring-1 focus:ring-black focus:border-black"
        />
      </div>

      <div className="flex flex-col border border-gray-200 rounded-md shadow-sm h-[635px]">
        {/* Header stays visible */}
        <div>
          <table className="min-w-full text-sm">
            <thead className="bg-black sticky top-0 z-10">
              {table.getHeaderGroups().map((headerGroup) => (
                <tr key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="px-4 py-2 text-left font-medium text-white border-b border-gray-300"
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
          </table>
        </div>
    
         <div className="flex-1 overflow-y-auto">
          <table className="min-w-full text-sm">
  <tbody className="divide-y divide-gray-200">
    {casesData.length > 0 ? (
      table.getRowModel().rows.map((row, rowIdx) => (
        <tr
          key={row.id}
          className={`${
            rowIdx % 2 === 0 ? "bg-white" : "bg-gray-50"
          } hover:bg-gray-100 transition-colors`}
        >
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="px-4 py-2 whitespace-nowrap text-gray-800"
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan={columns.length} className="text-center py-8 text-gray-500">
          There is no data for "{debouncedSearch}"
        </td>
      </tr>
    )}
  </tbody>
</table>
        </div>
      
  
        <div className="border-t border-gray-300 px-4 py-3 flex justify-between items-center">

          <div className="flex items-center gap-4">
            <Select value={String(pagination.pageSize)} onValueChange={handlePageSizeChange}>
              <SelectTrigger className="w-28">
                <SelectValue placeholder={`${pagination.pageSize}/page`} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {[15, 25, 100, 500].map((size) => (
                    <SelectItem key={size} value={String(size)}>
                      {size}/page
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>

            <span className="text-sm text-gray-600">
              {pagination.pageIndex * pagination.pageSize + 1} –{" "}
              {Math.min(
                (pagination.pageIndex + 1) * pagination.pageSize,
                data?.data?.pagination_info?.total_records ?? 0
              )}{" "}
              of {data?.data?.pagination_info?.total_records ?? 0}
            </span>
          </div>

        {/* right: GoTo + pagination */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-sm">
            <span>GoTo</span>
            <input
              type="number"
              min={1}
              max={totalPageCount}
              value={pagination.pageIndex + 1}
              onChange={handleGoToPageChange}
              className="w-14 px-2 py-1 border border-gray-300 rounded text-center text-sm"
            />
          </div>

  <Pagination>
    <PaginationContent className="flex items-center justify-center gap-2">

      <PaginationItem>
        {table.getCanPreviousPage() ? (
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              table.previousPage();
            }}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-sm transition-colors"
          />
        ) : (
          <span className="px-3 py-1 rounded-md border border-gray-200 bg-gray-100 text-gray-400 text-sm cursor-not-allowed">
            Previous
          </span>
        )}
      </PaginationItem>

      {/* Page Numbers */}
      {(() => {
        const current = pagination.pageIndex;
        const total = totalPageCount;
        const pages: (number | string)[] = [];

        if (total <= 7) {
          for (let i = 0; i < total; i++) pages.push(i);
        } else {
          pages.push(0);
          if (current > 2) pages.push("...");
          for (
            let i = Math.max(1, current - 1);
            i <= Math.min(total - 2, current + 1);
            i++
          ) {
            pages.push(i);
          }
          if (current < total - 3) pages.push("...");
          pages.push(total - 1);
        }

        return pages.map((p, idx) => (
          <PaginationItem key={idx}>
            {p === "..." ? (
              <PaginationEllipsis className="px-2 text-gray-500" />
            ) : (
              <PaginationLink
                href="#"
                isActive={p === current}
                onClick={(e) => {
                  e.preventDefault();
                  table.setPageIndex(p as number);
                }}
                className={`px-3 py-1 rounded-md border text-sm transition-colors ${
                  p === current
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
                }`}
              >
                {(p as number) + 1}
              </PaginationLink>
            )}
          </PaginationItem>
        ));
      })()}

      {/* Next Button */}
      <PaginationItem>
        {table.getCanNextPage() ? (
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              table.nextPage();
            }}
            className="px-3 py-1 rounded-md border border-gray-300 bg-white hover:bg-gray-100 text-gray-700 text-sm transition-colors"
          />
        ) : (
          <span className="px-3 py-1 rounded-md border border-gray-200 bg-gray-100 text-gray-400 text-sm cursor-not-allowed">
            Next
          </span>
        )}
      </PaginationItem>
    </PaginationContent>
  </Pagination>
        </div>
      </div>
    </div>
    </>
  );
}

export default Projects;