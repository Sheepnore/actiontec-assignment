import { useState } from "react";
import Button from "@mui/material/Button";
import { handleRefresh } from "../../data/refresh";
import refreshIcon from "../../assets/refresh-ccw.svg";
import CircularProgress from "@mui/material/CircularProgress";

export default function RefreshBtn({ setPostsData, currentPage }) {
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleClick = async () => {
    setIsRefreshing(true);
    await handleRefresh(setPostsData, currentPage);
    setIsRefreshing(false);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      onClick={handleClick}
      className="gap-x-2"
      disabled={isRefreshing}
    >
      {isRefreshing ? (
        <CircularProgress size={16} color="inherit" />
      ) : (
        <img src={refreshIcon} alt="refresh-icon" />
      )}
      <span>{isRefreshing ? "Refreshing..." : "Refresh"}</span>
    </Button>
  );
}
