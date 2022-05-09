/* eslint-disable @typescript-eslint/ban-types */
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Stack } from "@mui/material";

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  minWidth: 300,
  minHeight:350,
  bgcolor: "background.paper",
  border: "2px solid #fff",
  boxShadow: 24,
  borderRadius: 2,
  display:"flex",
  justifyContent: "center",
  alignItems: "center",
  p: 4,
};

export type PropsType= {
    open: boolean,
    handleClose: () =>{},
    children: React.ReactNode
}

 const ModalContent: React.FC<PropsType> = (props) => {

  const {open, handleClose, children } = props;

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <Stack>{ children }</Stack>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}


export default  ModalContent;
