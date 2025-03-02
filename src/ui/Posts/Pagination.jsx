import * as React from "react";
import Pagination from "@mui/material/Pagination";

// NOTE: need to implement debounce fn to avoid race condition
export default function MUIPagination({ setCurrentPage }) {
  return (
    <Pagination
      count={10}
      color="primary"
      className="flex justify-end"
      variant="outlined"
      onChange={() => {
        setCurrentPage((prev) => prev + 1);
      }}
    />
  );
}
