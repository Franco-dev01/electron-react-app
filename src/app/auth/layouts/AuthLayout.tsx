/* eslint-disable react/prop-types */
import { Grid, Stack } from "@mui/material";

import { AuthLayoutProps } from "../types";
export const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  return (
    <>
      <Grid container minHeight="100vh" minWidth="100vw" justifyContent="space-around"  alignItems="center">
        <Grid item xs={12} sm={12} md={12} lg={3} xl={4}>
          <Stack
            spacing={3}
            bgcolor="#fff"
            boxShadow={2}
            padding={4}
            borderRadius={1}
            minHeight={300}
            minWidth={400}
            >
            {children}
          </Stack>
        </Grid>
      </Grid>
    </>
  );
};
