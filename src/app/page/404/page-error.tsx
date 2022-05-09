import { Stack, Typography } from "@mui/material";
import React from "react";

export const NotFound: React.FC = () => {
  return (
  <Stack
  display="flex"
  flexDirection="column"
  justifyContent="center"
  alignItems="center"
  width="100vw"
  height="100vh"
  >
  <Typography fontSize={100} fontWeight="bold" color="#11A1F2">404</Typography>    
  <Typography fontWeight="bold" fontSize={35}>Not Found</Typography>  
  <Typography fontSize={20}>Sorry, we are anable to find that page</Typography>    
  <Typography fontSize={15}>Please use main menu or choose for category below</Typography>    

  </Stack>);
};
