import Button from "@mui/material/Button";
import { useTheme, useMediaQuery } from "@mui/material";
import deleteIcon from "../../assets/delete-icon.svg";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useState } from "react";
export default function DeleteBtn({ handleDelete }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
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
        onClick={() => {
          handleClickOpen();
        }}
      >
        <img src={deleteIcon} alt="delete-icon" />
        <span>Delete</span>
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete this comment?"}
        </DialogTitle>
        <DialogContent>*This action is irreversible</DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>No</Button>
          <Button
            onClick={() => {
              handleClose();
              handleDelete();
            }}
            autoFocus
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
