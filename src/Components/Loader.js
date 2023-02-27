import React, { useState, useEffect } from "react";
import { Backdrop } from "@mui/material";
import ReactLoading from "react-loading";

export default function LoaderState() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    handleToggle();
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Backdrop sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
      <div
        className="loader__wrap"
        role="alertdialog"
        aria-busy="true"
        aria-live="polite"
        aria-label="Loading…"
      >
        <div className="lds-ripple">
        <ReactLoading type={"spinningBubbles"} color={'#fff'} height={60} width={60} />
        </div>
      </div>
    </Backdrop>
  );
}
