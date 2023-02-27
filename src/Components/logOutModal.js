import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";
import { router } from "next/router";

export default function LogoutHandlerModal({ open, setOpen }) {

    // const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleClose = () => {
        setOpen(false);
    };
    const logoutHandler = () => {
        // dispatch(logOutApi());
        sessionStorage.clear();
        localStorage.clear();
        router.replace("/auth/Login");
    };


    return (
        <>
            <Modal
                open={open}
                onClose={(_, reason) => {
                    if (reason !== "backdropClick") {
                        handleClose();
                    }
                }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                disableBackdropClick
            >
                <Box className="box-stat-Del" width={400}>
                    <Grid item sx={{ alignContent: "center" }}>
                        <Typography
                            id="modal-modal-title"
                            color="black"
                            variant="h6"
                            component="h2"
                            sx={{ p: 4, alignItems: "center" }}
                        >
                            Are you sure you want to Logout?
                        </Typography>
                    </Grid>
                    <Grid item sx={{ display: "flex", justifyContent: "center" }} mt={2}>
                        <Button
                            variant="contained"
                            onClick={logoutHandler}
                            className="reject-btn"
                            sx={{ padding: "10px 40px" }}
                        >
                            Yes
                        </Button>
                        <Button
                            variant="contained"
                            sx={{ marginLeft: "40px", padding: "10px 40px",backgroundColor:"#6e99ff" }}
                            onClick={() => {
                                handleClose(false);
                            }}
                            className="accept-btn"
                        >
                            Stay
                        </Button>
                    </Grid>
                </Box>
            </Modal>
        </>
    );
}
