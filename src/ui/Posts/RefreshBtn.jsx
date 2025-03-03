import Button from "@mui/material/Button";
import { handleRefresh } from "../../data/refresh";
import refreshIcon from "../../assets/refresh-ccw.svg";
export default function RefreshBtn({ setPostsData, currentPage }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={() => {
        handleRefresh(setPostsData, currentPage);
      }}
      className="gap-x-2"
    >
      <img src={refreshIcon} alt="refresh-icon" />
      <span>Refresh</span>
    </Button>
  );
}
