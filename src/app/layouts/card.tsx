import React from "react";
import { Box, Stack } from "@mui/material";

type CardType = {
  children: React.ReactNode;
};
const CustomCard: React.FC<CardType> = ({ children }) => {
  return (
    <Stack
      border={1}
      padding={2}
      boxShadow={2}
      flexGrow={1}
      sx={{
        borderColor: "#fff",
        backgroundColor: "#fff",
        minHeight: "100px"
      }}>
      <Box>{children}</Box>
    </Stack>
  );
};
export default CustomCard;
