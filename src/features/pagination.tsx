import TablePagination from "@mui/material/TablePagination";
import { observer } from "mobx-react-lite";
import { useStore } from "../hooks/useStore";

const PaginationFn = ({ count }: { count: number }) => {
  const store = useStore();
  return (
    <TablePagination
      count={count}
      page={store.pagination.page}
      rowsPerPage={store.pagination.pageSize}
      rowsPerPageOptions={[5, 10, 25, 50]}
      onRowsPerPageChange={(event) => {
        store.pagination.changePerPage(parseInt(event.target.value, 10));
        store.pagination.changePage(0);
      }}
      onPageChange={(_, page) => {
        store.pagination.changePage(page);
      }}
    />
  );
};

export const Pagination = observer(PaginationFn);
