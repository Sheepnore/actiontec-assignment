import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import deleteIcon from "../../assets/delete-icon.svg";
export default function DeleteBtn({ handleDelete }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Button
      className="gap-x-2"
      variant="contained"
      color="danger"
      size={isMobile ? "small" : "medium"}
      sx={{
        mt: 1,
        px: { xs: 1, sm: 2 },
        py: { xs: 0.5, sm: 1 },
        fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
        width: { xs: "100%", sm: "auto" },
      }}
      onClick={handleDelete}
    >
      <img src={deleteIcon} alt="delete-icon" />
      <span>Delete</span>
    </Button>
  );
}
