import Button from "@mui/material/Button";
import { handleRefresh } from "../../utils/refresh";
export default function RefreshBtn({ setPostsData, currentPage }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => {
        handleRefresh(setPostsData, currentPage);
      }}
    >
      Refresh
    </Button>
  );
}
