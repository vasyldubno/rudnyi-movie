import CloseIcon from "@mui/icons-material/Close";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Snackbar from "@mui/material/Snackbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};

export const ConfirmModal = ({ open, url, title, onClose }) => {
  const [openAlert, setOpenAlert] = React.useState(false);
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            align="center"
          >
            {title}
          </Typography>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 350,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="list URL"
              inputProps={{ "aria-label": "list URL" }}
              value={url}
            />
            <IconButton
              sx={{ p: "10px" }}
              aria-label="preview"
              href={url}
              target="_blank"
            >
              <VisibilityIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />

            <CopyToClipboard text={url} onCopy={() => setOpenAlert(true)}>
              <IconButton
                color="primary"
                sx={{ p: "10px" }}
                aria-label="copy to clipboard"
              >
                <ContentCopyIcon />
              </IconButton>
            </CopyToClipboard>
          </Paper>
          {openAlert ? (
            <Snackbar
              open={openAlert}
              autoHideDuration={2000}
              onClose={() => setOpenAlert(false)}
            >
              <Alert
                action={
                  <IconButton
                    aria-label="close"
                    color="inherit"
                    size="small"
                    onClick={() => {
                      setOpenAlert(false);
                    }}
                  >
                    <CloseIcon fontSize="inherit" />
                  </IconButton>
                }
                sx={{ mb: -7, ml: 8 }}
              >
                Copied!
              </Alert>
            </Snackbar>
          ) : null}
        </Box>
      </Modal>
    </div>
  );
};
